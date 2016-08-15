/**
 * @ngdoc controller
 * @name touhou.controller:LoginCtrl
 * @description
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl($http, $state, $window, Restangular) {
        var vm = this;
        vm.login = login;

        function login() {
        	console.log(vm.password);
        	 Restangular.setDefaultHeaders({
                'Content-Type'  : 'application/json;charset=UTF-8'
                //'Access-Control-Allow-Origin': '*',
            });
        	Restangular.all('api/user/signIn/' + vm.phone + '/' + vm.password).customGET().then(function(res) {
                if(res.success) {
                    debugger
                }
        	});
        }
        
    }
})();
