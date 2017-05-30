(function() {

  'use strict';

  var path = require('path');
  var ExtractTextPlugin = require("extract-text-webpack-plugin");
  var HtmlWebpackPlugin = require("html-webpack-plugin");
  var CopyWebpackPlugin = require("copy-webpack-plugin");
  var webpack = require('webpack');

  var PATHS = {
    app: path.join(__dirname, 'app', 'index.js'),
    build: path.join(__dirname, 'build'),
    index: path.join(__dirname, 'app', 'index.html'),
    images: path.join(__dirname, 'app', 'img'),
    styles: path.join(__dirname, 'app', 'app.css'),
    mocks: path.join(__dirname, 'app', 'phones')
  };

  var config = {
    entry: {
      app: PATHS.app,
      styles: PATHS.styles
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /index\.html/,
          loader: 'ng-cache-loader',
          options: {
            prefix: '[dir]',
            module: 'phoneTemplates'
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(['css-loader?sourceMap'])
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg)(?:\?.*|)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: PATHS.index}),
      new ExtractTextPlugin('[name].css'),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new CopyWebpackPlugin([
        { from: PATHS.images,
          to: 'img'
        }
        ], {
          ignore: [
            '*.gitkeep'
          ]
      }),
      new CopyWebpackPlugin([
        { from: PATHS.mocks,
          to: 'phones'
        }
      ], {
        ignore: [
          '*.gitkeep'
        ]
      })
    ]
  };

  module.exports = [config];
}());
