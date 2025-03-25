import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.all,
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/one-var-declaration-per-line": ["error", "always"],
      "one-var": ["error", "never"],
      "astro/sort-attributes": "off",
    },
  },
);
