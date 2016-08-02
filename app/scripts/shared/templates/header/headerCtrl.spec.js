'use strict';

describe('Controller: HeaderCtrl', function() {

    // load the controller's module
    beforeEach(module('touhou'));

    var HeaderCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl = $controller('HeaderCtrl', {
             $scope: scope
             // place mocked dependencies here
        });
    }));

    it('should ...', function() {
         expect(true).toBe(true);
    });
});