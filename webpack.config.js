(function() {

  'use strict';

  var path = require('path');
  var ExtractTextPlugin = require("extract-text-webpack-plugin");
  var HtmlWebpackPlugin = require("html-webpack-plugin");
  var webpack = require('webpack');

  var config = {
    entry: './app/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({'template':'./app/index.html'}),
      new ExtractTextPlugin("bundle.css"),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  };

  module.exports = config;
}());
