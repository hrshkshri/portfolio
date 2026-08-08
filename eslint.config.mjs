// eslint-config-next 16 ships native flat config, so this imports the shareable
// configs directly rather than bridging the old .eslintrc format via FlatCompat.
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "public/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
  ...typescriptConfig,
  {
    rules: {
      // Warn rather than off: these catch real bugs, but shouldn't block a build.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
]

export default config;
