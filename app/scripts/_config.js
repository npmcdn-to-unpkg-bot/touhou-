/**
 * @ngdoc overview
 * @name ccfeFrontend.config
 * @description
 * Config file for ccfeFrontend.
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .config(function (RestangularProvider, lockerProvider, baseURL) {
            lockerProvider.defaults({
                driver: 'session',
                separator: '.',
                eventsEnabled: true,
                extend: {}
            });
		    RestangularProvider.setBaseUrl(baseURL);
        });
        // .constant('baseURL', 'http://ccfe.richemont.d1m.cn:8086/ccfe/');
})();
