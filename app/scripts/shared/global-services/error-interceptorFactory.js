/**
 * @ngdoc factory
 * @name ccfeFrontend.ErrorInterceptor
 * @description
 * Global interceptor to handle API response errors
 */

 (function() {
    'use strict';

    angular
        .module('touhou')
        .factory('ErrorInterceptor', ErrorInterceptor)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('ErrorInterceptor');
        });

    /* @ngInject */
    function ErrorInterceptor($q, $injector) {

        // Common function to handle HTTP statuses
        var handleStatus = function (status) {
            var toastr = $injector.get('toastr'),
                $state = $injector.get('$state');
            switch (status) {
                case 401:
                    // Unauthenticated or token expired, redirect to login
                    $state.go('login', {redirectUrl: encodeURIComponent(document.URL)});
                    break;
                case 403:
                    // Forbidden
                    toastr.error('Error 403: You have no permissions to complete this action');
                    break;
                case 0:
                    toastr.error('Error: Request timeout');
                    break;
                case -1:
                    // Uncaught server error with stack trace
                    toastr.error('Error: Server error');
                    break;
                case 404:
                    // Not found
                    toastr.error('Error 404: URL not found');
                    break;
                // case 503:
                //     toastr.error('Gateway Error 503: Service unavailable');
                //     break;
            }
        }

        return {
            request: function (config) {
                return config;
            },
            requestError: function (rejection) {
                return rejection;
            },
            response: function (response) {
                if (response.config.errorMsg !== false) {
                    var toastr = $injector.get('toastr');
                    
                    // Common error handling, display error message
                    if (response.data.success === false && response.data.message) {
                        var msg = 'Error ' + response.data.code + ': '+ response.data.message;
                        toastr.error(msg);
                    }
                }
                
                handleStatus(response.status);

                return response || $q.when(response);
            },
            responseError: function(rejection) {
                var toastr = $injector.get('toastr');

                // Common error response for cases with server side handling
                if (rejection && rejection.data && rejection.data.message) {
                    var msg = 'Error ' + rejection.data.code + ': '+ rejection.data.message;
                    toastr.error(msg);
                }

                handleStatus(rejection.status);

                return $q.reject(rejection);
            }
        };
    }
})();
