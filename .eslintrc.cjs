module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "solid",
        "jsx-a11y",
        '@typescript-eslint'
    ],
    extends: [
        "eslint:recommended",
        "plugin:solid/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended-type-checked"
    ],
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: "tsconfig.json",
    },
    env: {
        browser: true,
        node: true // we are not running in node, but module.exports will not work in the first line of this file if this is not here
    }
};