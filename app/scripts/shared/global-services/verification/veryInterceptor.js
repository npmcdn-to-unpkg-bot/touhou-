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
            
            $state.go('index');
            
            /*$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
                // Set previous state in rootScope so that it can be accessed in ctrl methods.
                // Used currently in CustomerSearch (back button from Detail page)
                $rootScope.previousState = {
                    name: fromState.name,
                    params: fromParams
                };

                var isLogin = toState.name === 'login';
                if(isLogin){
                   return; // no need to redirect 
                }
                e.preventDefault(); // stop current execution
                $state.go('index'); // go to login
            });*/
        });
})();