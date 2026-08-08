import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

/**
 * Covers the rate-limit and stale-fallback branches of the GitHub service.
 *
 * These paths decide whether /github renders or shows an error, and they are
 * hard to exercise for real: reproducing them against the live API means
 * burning 60 requests to get rate-limited, and the stale-fallback branch needs
 * a success immediately followed by a failure. Hence fakes.
 */

const USER = { login: "hrshkshri", public_repos: 64, followers: 25, following: 31 };
const REPOS = [{ id: 1, name: "portfolio", language: "TypeScript", html_url: "#" }];

function ok(body: unknown): Response {
  return {
    ok: true,
    status: 200,
    headers: new Headers(),
    json: async () => body,
  } as unknown as Response;
}

/** GitHub signals exhaustion as 403 + remaining:0, not only as 429. */
function rateLimited(status: number, resetEpoch: number): Response {
  return {
    ok: false,
    status,
    headers: new Headers({
      "x-ratelimit-remaining": "0",
      "x-ratelimit-reset": String(resetEpoch),
    }),
    json: async () => ({}),
  } as unknown as Response;
}

function failure(status: number, headers: Record<string, string> = {}): Response {
  return {
    ok: false,
    status,
    headers: new Headers(headers),
    json: async () => ({}),
  } as unknown as Response;
}

/** Fresh module instance so the module-scoped `lastGood` cache starts empty. */
async function loadService() {
  vi.resetModules();
  return import("./github.service");
}

function mockSuccess(fetchMock: ReturnType<typeof vi.fn>) {
  fetchMock.mockResolvedValueOnce(ok(USER)).mockResolvedValueOnce(ok(REPOS));
}

describe("githubServerService.getAllData", () => {
  const NOW = 1_700_000_000_000;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
    delete process.env.GITHUB_TOKEN;
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("returns fresh data and marks it not stale", async () => {
    const { githubServerService } = await loadService();
    mockSuccess(fetchMock);

    const { data, stale } = await githubServerService.getAllData();

    expect(stale).toBe(false);
    expect(data.user.login).toBe("hrshkshri");
    expect(data.repos).toHaveLength(1);
  });

  it("does not request events — nothing renders them and each call costs quota", async () => {
    const { githubServerService } = await loadService();
    mockSuccess(fetchMock);

    await githubServerService.getAllData();

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const urls = fetchMock.mock.calls.map((c) => c[0] as string);
    expect(urls.some((u) => u.includes("/events"))).toBe(false);
  });

  it("omits the Authorization header when GITHUB_TOKEN is unset", async () => {
    const { githubServerService } = await loadService();
    mockSuccess(fetchMock);

    await githubServerService.getAllData();

    expect(fetchMock.mock.calls[0][1].headers.Authorization).toBeUndefined();
  });

  it("sends a bearer token when GITHUB_TOKEN is set", async () => {
    process.env.GITHUB_TOKEN = "gh_test_token";
    const { githubServerService } = await loadService();
    mockSuccess(fetchMock);

    await githubServerService.getAllData();

    for (const call of fetchMock.mock.calls) {
      expect(call[1].headers.Authorization).toBe("Bearer gh_test_token");
    }
  });

  it("treats 403 with remaining:0 as a rate limit and derives Retry-After", async () => {
    const { githubServerService, GitHubRateLimitError } = await loadService();
    const resetIn = 900;
    fetchMock.mockResolvedValue(rateLimited(403, NOW / 1000 + resetIn));

    const err = await githubServerService.getAllData().catch((e) => e);

    expect(err).toBeInstanceOf(GitHubRateLimitError);
    expect(err.retryAfterSeconds).toBe(resetIn);
  });

  it("treats a plain 429 as a rate limit too", async () => {
    const { githubServerService, GitHubRateLimitError } = await loadService();
    fetchMock.mockResolvedValue(rateLimited(429, NOW / 1000 + 60));

    await expect(githubServerService.getAllData()).rejects.toBeInstanceOf(
      GitHubRateLimitError
    );
  });

  it("clamps Retry-After at zero when the reset time has already passed", async () => {
    const { githubServerService } = await loadService();
    fetchMock.mockResolvedValue(rateLimited(403, NOW / 1000 - 500));

    await expect(githubServerService.getAllData()).rejects.toMatchObject({
      retryAfterSeconds: 0,
    });
  });

  it("serves the last good payload as stale when a later fetch fails", async () => {
    const { githubServerService } = await loadService();

    mockSuccess(fetchMock);
    const first = await githubServerService.getAllData();
    expect(first.stale).toBe(false);

    fetchMock.mockResolvedValue(rateLimited(403, NOW / 1000 + 300));
    const second = await githubServerService.getAllData();

    expect(second.stale).toBe(true);
    expect(second.data.user.login).toBe("hrshkshri");
  });

  it("throws a generic error, not a rate-limit error, for other failures", async () => {
    const { githubServerService, GitHubRateLimitError } = await loadService();
    fetchMock.mockResolvedValue(failure(500));

    const err = await githubServerService.getAllData().catch((e) => e);

    expect(err).toBeInstanceOf(Error);
    expect(err).not.toBeInstanceOf(GitHubRateLimitError);
  });

  it("does not treat a 403 with quota remaining as a rate limit", async () => {
    const { githubServerService, GitHubRateLimitError } = await loadService();
    fetchMock.mockResolvedValue(failure(403, { "x-ratelimit-remaining": "42" }));

    const err = await githubServerService.getAllData().catch((e) => e);

    expect(err).not.toBeInstanceOf(GitHubRateLimitError);
  });

  it("surfaces a network-level failure rather than hanging", async () => {
    const { githubServerService, GitHubRateLimitError } = await loadService();
    fetchMock.mockRejectedValue(new TypeError("fetch failed"));

    const err = await githubServerService.getAllData().catch((e) => e);

    expect(err).toBeInstanceOf(Error);
    expect(err).not.toBeInstanceOf(GitHubRateLimitError);
  });
});
