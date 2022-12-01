const options = {
  extends: ['next', 'prettier', 'plugin:tailwind/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-var': 'error'
  }
};

module.exports = options;
