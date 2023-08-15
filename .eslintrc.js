module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['next'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    rules: {},
  };
  