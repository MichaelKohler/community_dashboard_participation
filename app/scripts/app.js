'use strict';

/**
 * @ngdoc overview
 * @name moz.cpd
 * @description
 * # moz.cpd
 *
 * Main module of the application.
 */
angular
  .module('moz.cpd', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('cpdRoutes', {
      countries: '/api/countries'
  });
