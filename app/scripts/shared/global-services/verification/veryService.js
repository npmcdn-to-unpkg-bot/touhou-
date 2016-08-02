/**
 * @ngdoc service
 * @name ccfeFrontend.Very
 * @description
 * Login, logout webservices.
 * @example
 * // Inject into controller, directives like so:
 * function (Very, ...) { ... }
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .factory('Very', Very);

    /* @ngInject */
    function Very(Restangular, locker) {
    	var service = {
            validateToken: validateToken,
    		login: login,
    		logout: logout,
            clear: clear
    	};

    	return service;

        /** 
         * @memberof ccfeFrontend.Auth
         * @param {token} string User token
         * @description
         * Service to check for token validity. Returns true or false
         * @example
         * Auth.validateToken(token).then(function(res) {
         *   if (res.success) {
         *       var valid = res.data; // true or false
         *   }
         * });
         */
        function validateToken(token) {
            // Check if token exists in locker
            return Restangular.all('auth/validate_token').customGET('', {}, {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': token
            });
        }

    	/** 
         * @memberof ccfeFrontend.Auth
         * @param {string} account User account
         * @param {password} password User password
         * @description
         * User login webservice.
         * @example
         * Auth.login(vm.account, vm.password).then(function(data) {
         * // Some actions here
         * });
         */
    	function login(account, password) {
            var login = {
                account: account,
                password: password
            };
    		return Restangular.all('auth/login').customPOST(login);
    	}

        /** 
         * @memberof ccfeFrontend.Auth
         * @method logout
         * @description
         * User logout webservice.
         * @example
         * Auth.logout().then(function(data) {
         * // Some actions here
         * });;
         */
        function logout() {
            return Restangular.all('auth/logout').customGET();
        }

    	/** 
         * @memberof ccfeFrontend.Auth
         * @method clear
         * @description
         * Clears any browser HTML5 storage (sessionStorage, localStorage)
         * @example
         * Auth.clear();
         */
    	function clear() {
            // Remove all items in sessionStorage, localStorage
            locker.driver('session').empty();
            locker.driver('local').empty();
    	}
    }

})();
