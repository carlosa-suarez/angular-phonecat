(function() {

  'use strict';
  
  /*
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="app.css" />
    <link rel="stylesheet" href="app.animations.css" />

    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/angular/angular.js"></script>
    <script src="../node_modules/angular-animate/angular-animate.js"></script>
    <script src="../node_modules/angular-resource/angular-resource.js"></script>
    <script src="../node_modules/angular-route/angular-route.js"></script>
    <script src="app.module.js"></script>
    <script src="app.config.js"></script>
    <script src="app.animations.js"></script>
    <script src="core/core.module.js"></script>
    <script src="core/checkmark/checkmark.filter.js"></script>
    <script src="core/phone/phone.module.js"></script>
    <script src="core/phone/phone.service.js"></script>
    <script src="phone-list/phone-list.module.js"></script>
    <script src="phone-list/phone-list.component.js"></script>
    <script src="phone-detail/phone-detail.module.js"></script>
    <script src="phone-detail/phone-detail.component.js"></script>
*/
  //jsons
  //require('./phones/phones.webpack');


  //bower components
  require('bootstrap');
  require('angular');
  require('angular-animate');
  require('angular-resource');
  require('angular-route');

  //app
  require('./app.module');
  require('./app.config');
  require('./app.animations');

  //modules
  require('./core/core.webpack');
  require('./phone-detail/phone-detail.webpack');
  require('./phone-list/phone-list.webpack');
  require('./phone-item/phone-item.webpack');

  // Require all the .html files
  //@require "./**/!(index).html"

}());
