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
    function LoginCtrl($state, Restangular, User) {
        var vm = this;
        vm.login = login;

        // login
        function login() {
        	Restangular.all('user/signIn/' + vm.phone + '/' + md5(vm.password)).customGET().then(function(res) {
                if(res.success) {
                    User.setUser(res.content);
                    $state.go('main.user.detail', res.content); //turn to personal center
                }
        	});
        }
        
    }
})();
