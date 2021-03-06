module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/es6',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    es6: true,
  }
}