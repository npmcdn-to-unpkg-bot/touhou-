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
        console.log(md5(vm.password));

        // login
        function login() {
        	 Restangular.setDefaultHeaders({
                'Content-Type'  : 'application/json;charset=UTF-8'
            });

        	Restangular.all('api/user/signIn/' + vm.phone + '/' + vm.password).customGET().then(function(res) {
                if(res.success) {
                    console.log(res);
                }
        	});
        }
        
    }
})();
