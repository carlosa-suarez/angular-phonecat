'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneTemplates',
  'phoneDetail',
  'phoneList'
]);

angular.element(function() {
  angular.bootstrap(document, ['phonecatApp']);
});
