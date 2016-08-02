'use strict';

describe('Factory: LoadingInterceptor', function() {
    // load the service's module
    beforeEach(module('touhou'));

    // instantiate service
    var LoadingInterceptor;
    beforeEach(inject(function (_LoadingInterceptor_) {
        LoadingInterceptor = _LoadingInterceptor_;
    }));

    it('should be defined', function() {
        expect(true).toBe(true);
    });

});