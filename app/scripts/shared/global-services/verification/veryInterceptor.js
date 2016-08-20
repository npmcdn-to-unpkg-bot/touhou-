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
        .run(function($rootScope, $state) {
            
            $state.go('main.index');

            /*$rootScope.$on('$stateChangeStart', function(e) {
                debugger
            });*/
        });
})();