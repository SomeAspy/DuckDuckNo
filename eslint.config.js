// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import solid from "eslint-plugin-solid/dist/configs/typescript.js";
import prettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
    eslint.configs.recommended,
    // JSX-A11y doesn't seem to have types at the moment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    jsxA11y.flatConfigs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    solid,
    prettier,
    {ignores: ["dist"]},
    {
        ...solid,
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                project: true,
                tsconfigRootDir: "tsconfig.json"
            }
        },
        rules: {
            "@typescript-eslint/no-non-null-assertion": 0
        }
    }
);
