import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

const config = [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        describe: "readonly",
        jest: "readonly",
        expect: "readonly",
      },
    },
  },
  {
    files: ["**/*.js"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  }
];

export default config;
