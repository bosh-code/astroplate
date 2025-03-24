import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      "astro/sort-attributes": "off",
    },
  },
);
