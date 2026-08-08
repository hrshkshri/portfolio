import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

/**
 * Covers the rate-limit and stale-fallback branches of the GitHub service.
 *
 * These paths decide whether /github renders or shows an error, and they are
 * hard to exercise for real: reproducing them against the live API means
 * burning 60 requests to get rate-limited, and the stale-fallback branch needs
 * a success immediately followed by a failure. Hence fakes.
 */

vi.mock("./axios", () => ({
  default: { get: vi.fn() },
}));

const USER = { login: "hrshkshri", public_repos: 64, followers: 25, following: 31 };
const REPOS = [{ id: 1, name: "portfolio", language: "TypeScript", html_url: "#" }];

/** GitHub signals exhaustion as 403 + remaining:0, not only as 429. */
function rateLimitError(status: number, resetEpoch: number) {
  return {
    response: {
      status,
      headers: {
        "x-ratelimit-remaining": "0",
        "x-ratelimit-reset": String(resetEpoch),
      },
    },
  };
}

/** Fresh module instance so the module-scoped `lastGood` cache starts empty. */
async function loadService() {
  vi.resetModules();
  const axios = (await import("./axios")).default as unknown as {
    get: ReturnType<typeof vi.fn>;
  };
  const mod = await import("./github.service");
  return { axios, ...mod };
}

function mockSuccess(axios: { get: ReturnType<typeof vi.fn> }) {
  axios.get
    .mockResolvedValueOnce({ data: USER })
    .mockResolvedValueOnce({ data: REPOS });
}

describe("githubServerService.getAllData", () => {
  const NOW = 1_700_000_000_000;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
    delete process.env.GITHUB_TOKEN;
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("returns fresh data and marks it not stale", async () => {
    const { axios, githubServerService } = await loadService();
    mockSuccess(axios);

    const { data, stale } = await githubServerService.getAllData();

    expect(stale).toBe(false);
    expect(data.user.login).toBe("hrshkshri");
    expect(data.repos).toHaveLength(1);
  });

  it("does not request events — nothing renders them and each call costs quota", async () => {
    const { axios, githubServerService } = await loadService();
    mockSuccess(axios);

    await githubServerService.getAllData();

    expect(axios.get).toHaveBeenCalledTimes(2);
    const urls = axios.get.mock.calls.map((c) => c[0] as string);
    expect(urls.some((u) => u.includes("/events"))).toBe(false);
  });

  it("omits the Authorization header when GITHUB_TOKEN is unset", async () => {
    const { axios, githubServerService } = await loadService();
    mockSuccess(axios);

    await githubServerService.getAllData();

    const headers = axios.get.mock.calls[0][1].headers;
    expect(headers.Authorization).toBeUndefined();
  });

  it("sends a bearer token when GITHUB_TOKEN is set", async () => {
    process.env.GITHUB_TOKEN = "gh_test_token";
    const { axios, githubServerService } = await loadService();
    mockSuccess(axios);

    await githubServerService.getAllData();

    for (const call of axios.get.mock.calls) {
      expect(call[1].headers.Authorization).toBe("Bearer gh_test_token");
    }
  });

  it("treats 403 with remaining:0 as a rate limit and derives Retry-After", async () => {
    const { axios, githubServerService, GitHubRateLimitError } = await loadService();
    const resetIn = 900;
    axios.get.mockRejectedValue(rateLimitError(403, NOW / 1000 + resetIn));

    await expect(githubServerService.getAllData()).rejects.toBeInstanceOf(
      GitHubRateLimitError
    );

    await expect(githubServerService.getAllData()).rejects.toMatchObject({
      retryAfterSeconds: resetIn,
    });
  });

  it("treats a plain 429 as a rate limit too", async () => {
    const { axios, githubServerService, GitHubRateLimitError } = await loadService();
    axios.get.mockRejectedValue(rateLimitError(429, NOW / 1000 + 60));

    await expect(githubServerService.getAllData()).rejects.toBeInstanceOf(
      GitHubRateLimitError
    );
  });

  it("clamps Retry-After at zero when the reset time has already passed", async () => {
    const { axios, githubServerService } = await loadService();
    axios.get.mockRejectedValue(rateLimitError(403, NOW / 1000 - 500));

    await expect(githubServerService.getAllData()).rejects.toMatchObject({
      retryAfterSeconds: 0,
    });
  });

  it("serves the last good payload as stale when a later fetch fails", async () => {
    const { axios, githubServerService } = await loadService();

    mockSuccess(axios);
    const first = await githubServerService.getAllData();
    expect(first.stale).toBe(false);

    axios.get.mockRejectedValue(rateLimitError(403, NOW / 1000 + 300));
    const second = await githubServerService.getAllData();

    expect(second.stale).toBe(true);
    expect(second.data.user.login).toBe("hrshkshri");
  });

  it("throws a generic error, not a rate-limit error, for other failures", async () => {
    const { axios, githubServerService, GitHubRateLimitError } = await loadService();
    axios.get.mockRejectedValue({ response: { status: 500, headers: {} } });

    const err = await githubServerService.getAllData().catch((e) => e);

    expect(err).toBeInstanceOf(Error);
    expect(err).not.toBeInstanceOf(GitHubRateLimitError);
  });

  it("does not treat a 403 with quota remaining as a rate limit", async () => {
    const { axios, githubServerService, GitHubRateLimitError } = await loadService();
    axios.get.mockRejectedValue({
      response: { status: 403, headers: { "x-ratelimit-remaining": "42" } },
    });

    const err = await githubServerService.getAllData().catch((e) => e);

    expect(err).not.toBeInstanceOf(GitHubRateLimitError);
  });
});
