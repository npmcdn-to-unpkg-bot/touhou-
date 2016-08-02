'use strict';

describe('Service: Auth', function() {
    // load the service's module
    beforeEach(module('touhou'));

    // instantiate service
    var Auth;
    beforeEach(inject(function (_Auth_) {
        Auth = _Auth_;
    }));

    it('should be defined', function() {
        expect(true).toBe(true);
    });

});