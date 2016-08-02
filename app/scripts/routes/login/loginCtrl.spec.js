'use strict';

describe('Controller: LoginCtrl', function() {

    // load the controller's module
    beforeEach(module('touhou'));

    var LoginCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl', {
             $scope: scope
             // place mocked dependencies here
        });
    }));

    it('should ...', function() {
         expect(true).toBe(true);
    });
});