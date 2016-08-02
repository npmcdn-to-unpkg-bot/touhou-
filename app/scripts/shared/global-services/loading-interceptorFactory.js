/**
 * @ngdoc factory
 * @name ccfeFrontend.LoadingInterceptor
 * @description
 * - Automatically sets global spinner for all requests.
 * - To override, set 'spinner: false' in http config e.g.
 * ```
 * Restangular.all('products').withHttpConfig({spinner: false}).customGET('suggest', params);
 * ```
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .factory('LoadingInterceptor', LoadingInterceptor)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('LoadingInterceptor');
        });

    /* @ngInject */
    function LoadingInterceptor($rootScope) {
        // Set activeRequests for loading indicator display
        if ($rootScope.activeRequests == undefined) {
            $rootScope.activeRequests = 0;
        }

        // Checks for overrides: HTTPConfig with spinner: false
        function spinnerShow(config, val) {
            if (config.spinner !== false) {
                if (val === '+') {
                    $rootScope.activeRequests += 1;
                } else {
                    $rootScope.activeRequests -= 1;
                }
            }
        }

        return {
            request: function (config) {
                spinnerShow(config, '+');
                return config;
            },
            requestError: function (rejection) {
                spinnerShow(rejection.config, '-');
                return rejection;
            },
            response: function (response) {
                spinnerShow(response.config, '-');
                return response;
            },
            responseError: function(rejection) {
                spinnerShow(rejection.config, '-');
                return rejection;
            }
        };
    }
})();
