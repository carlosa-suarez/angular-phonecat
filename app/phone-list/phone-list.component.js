'use strict';

var templatePath = require('./phone-list.template.html');

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: templatePath,
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
