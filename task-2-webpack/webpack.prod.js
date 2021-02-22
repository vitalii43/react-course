const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
      }
    ],
  }
});