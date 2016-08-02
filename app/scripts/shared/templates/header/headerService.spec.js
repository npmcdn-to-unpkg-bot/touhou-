'use strict';

describe('Service: Header', function() {
    // load the service's module
    beforeEach(module('touhou'));

    // instantiate service
    var Header;
    beforeEach(inject(function (_Header_) {
        Header = _Header_;
    }));

    it('should be defined', function() {
        expect(true).toBe(true);
    });

});