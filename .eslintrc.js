/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        'eslint-config-prettier',
        '@vue/eslint-config-prettier',
        '@vue/eslint-config-typescript/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
    },
    plugins: ['@typescript-eslint', 'import', 'vue'],
    rules: {
        quotes: ['error', 'single'],
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'import/no-unresolved': 'off',
        'vue/multi-word-component-names': 'off',
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
module.exports = config;
