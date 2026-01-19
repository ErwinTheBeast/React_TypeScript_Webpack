import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },

    plugins: {
      react: react.configs.recommended,
      "react-hooks": reactHooks.configs.recommended,
      "@typescript-eslint": tseslint,
      import: [importPlugin.configs.errors, importPlugin.configs.warnings, importPlugin.configs.typescript],
      "jsx-a11y": jsxA11y.configs.recommended.rules,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      /* Base overrides */
      "no-unused-vars": "off",

      /* TypeScript */
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      /* React */
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];

// By the way, eslint config can be in ESM format or CJS format. Just make sure to name the file accordingly.
// Also nowadays the CJS format is less common, getting deprecated in favor of ESM.