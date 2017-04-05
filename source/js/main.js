'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngAnimate = require('angular-animate');
var ngSanitize = require('angular-sanitize');


/** @ngInject */
angular.module('ResourceRecon', [uiRouter, ngAnimate, ngSanitize])
  .controller(
    'MainController',
    require('./controllers/main-controller')
  )
  .directive('harvestEntry',
    require('./directives/harvest-entry-directive')
  )
  .directive('forecastEntry',
    require('./directives/forecast-entry-directive')
  )
  .filter(
    'slugify',
    require('./filters/slugify')
  )
  .service(
    'API',
    require('./services/api-service')
  )
  .config(require('./config'))

  .run(['$rootScope', '$state', '$stateParams', '$window', '$location', function($rootScope, $state, $stateParams, $window, $location) {
  //   $window.ga('create', 'UA-93404009-1', 'auto');
  //   $rootScope.$on('$stateChangeStart', function(event, toState, fromState) {
  //     $rootScope.loading = true;
  //   }.bind(this))
  //
  //   $rootScope.$on('$stateChangeSuccess', function(event, toState, fromState) {
  //     $rootScope.loading = false;
  //     $window.ga('send', 'pageview', $location.path());
  //   }.bind(this))
  }]);
angular.bootstrap(document, ['ResourceRecon']);
