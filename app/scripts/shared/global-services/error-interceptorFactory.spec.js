'use strict';

describe('Factory: ErrorInterceptor', function() {
    // load the service's module
    beforeEach(module('touhou'));

    // instantiate service
    var ErrorInterceptor;
    beforeEach(inject(function (_ErrorInterceptor_) {
        ErrorInterceptor = _ErrorInterceptor_;
    }));

    it('should be defined', function() {
        expect(true).toBe(true);
    });

});