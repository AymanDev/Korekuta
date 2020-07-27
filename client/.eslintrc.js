module.exports = {
    env: {
        browser: true,
        es6: true,
        es2017: true,
    },
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        // Prettier
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/display-name': 'off',
        'jsx-quotes': [1, 'prefer-double'],
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
    },
};
