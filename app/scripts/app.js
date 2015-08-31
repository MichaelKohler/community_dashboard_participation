'use strict';

/**
 * @ngdoc overview
 * @name cpdApp
 * @description
 * # cpdApp
 *
 * Main module of the application.
 */
angular
  .module('cpdApp', [
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
  });
