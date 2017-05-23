(function() {

  'use strict';

  var path = require('path');

  var config = {
    entry: './app/app.config.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.config.js'
    }
  };

  module.exports = config;
}());

