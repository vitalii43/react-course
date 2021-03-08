const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: {
                compileType: "module",
                mode: "local",
                auto: true,
                localIdentName: "[local]--[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});