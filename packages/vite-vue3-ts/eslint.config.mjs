import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tsEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import autoImportConfig from "./.eslintrc-auto-import.mjs";

export default tsEslint.config(
    { ignores: ["node_modules", ".nuxt", ".output", "*.d.ts", ".eslintrc-auto-import.mjs"] },
    {
        extends: [pluginJs.configs.recommended, ...tsEslint.configs.recommended, ...eslintPluginVue.configs["flat/recommended"]],
        files: ["**/*.{js,jsx,ts,tsx,vue}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...autoImportConfig.globals,
            },
            parser: vueParser,
            parserOptions: {
                parser: tsEslint.parser,
            },
        },
        rules: {
            "prettier/prettier": "error",
            "no-unused-vars": "off",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    args: "none",
                    ignoreRestSiblings: true,
                },
            ],
            "vue/multi-word-component-names": "off",
        },
    },
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
);
