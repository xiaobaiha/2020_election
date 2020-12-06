module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base', // https://github.com/airbnb/javascript
    'plugin:prettier/recommended', // 避免prettier规则与eslint冲突,冲突使用prettier规则, prettier需要放置在最后
    'prettier/vue', // 避免vue 与 prettier冲突
  ],
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
    'func-names': ['error', 'as-needed'], // 需要时添加函数名称
    'no-param-reassign': ['error', { props: false }], // 函数形参可修改
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
  globals: {},
};
