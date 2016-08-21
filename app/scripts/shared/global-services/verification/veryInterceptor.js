/**
 * @ngdoc service
 * @name ccfeFrontend.AuthenticationAuth
 * @description
 * Interceptor for authentication. 
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .run(function($rootScope, $state, Restangular) {
            
            $state.go('main.index');

            Restangular.setDefaultHeaders({
                'Content-Type'  : 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            });

            /*$rootScope.$on('$stateChangeStart', function(e) {
                debugger
            });*/
        });
})();