'use strict';

/**
 * @ngdoc function
 * @name moz.cpd.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moz.cpd
 */
angular.module('moz.cpd')
  .controller('MainCtrl', function ($scope, $rootScope, $http, cpdRoutes) {
      function loadData () {
          $http.get(cpdRoutes.countries).
              then(function(response) {
                $scope.countries = response.data;
                $rootScope.countries = $scope.countries.countries;
              }, function(error) {
                $scope.error = error;
              });
      }

      loadData();
  });
