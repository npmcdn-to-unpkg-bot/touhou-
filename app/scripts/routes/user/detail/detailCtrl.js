(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserDetailCtrl', UserDetailCtrl);

    /* @ngInject */
    function UserDetailCtrl($state, $stateParams, User, Restangular) {
        var vm = this;
        vm.currentUser = User.getUser();
       	console.log(vm.currentUser);

        Restangular.all('api/user/role/info').customGET().then(function(res) {
            if(res.success) {
                User.setRole(res.content);
                vm.userRole = User.getRole();
                console.log(vm.userRole);
            }
    	});
    }
})();