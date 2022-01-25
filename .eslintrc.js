module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'class-methods-use-this': 0,
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    camelcase: 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-parens': [2, 'as-needed'],
  },
};
