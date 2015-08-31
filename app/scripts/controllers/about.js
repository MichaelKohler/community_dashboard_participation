'use strict';

/**
 * @ngdoc function
 * @name cpdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cpdApp
 */
angular.module('cpdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
