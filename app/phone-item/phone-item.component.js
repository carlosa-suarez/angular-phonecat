'use strict';

var templatePath = require('./phone-item.template.html');
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneItem').
  component('phoneItem', {
    template: templatePath,
    bindings: {
    	phone: '='
    },
    controller: [function PhoneController($scope) {}]
  });