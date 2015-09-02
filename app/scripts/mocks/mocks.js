'use strict';

var mockApp = angular.module('moz.cpd.mocks', ['moz.cpd', 'ngMockE2E']);
mockApp.run(function($httpBackend) {
    $httpBackend.whenGET(/views\//).passThrough();
});
