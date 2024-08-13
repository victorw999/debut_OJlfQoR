const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'webpack_bundle.js',
    path: path.resolve(__dirname, './assets'),
  },
};