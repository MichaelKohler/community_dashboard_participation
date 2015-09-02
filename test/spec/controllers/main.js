'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('moz.cpd'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should not attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBe(undefined);
  });
});
