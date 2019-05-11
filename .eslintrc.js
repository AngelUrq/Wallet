module.exports = {
  'root': true,
  'env': {
    node: true,

  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'google',

  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', { 'code': 150 }],
    'linebreak-style': 0,
  },
  'parserOptions': {
    parser: 'babel-eslint',
  },
}
