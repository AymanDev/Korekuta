module.exports = {
  env: {
    es6: true,
    es2017: true,
  },
  extends: [
    "airbnb-typescript/base",
    // Prettier
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["import", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/unbound-method": "off",
    "jsx-quotes": [1, "prefer-double"],
    "@typescript-eslint/no-unused-expressions": "off",
  },
};
