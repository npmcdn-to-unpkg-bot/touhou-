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

       	Restangular.setDefaultHeaders({
            'Content-Type'  : 'application/json;charset=UTF-8',
            // 'Access-Control-Allow-Origin': '*'
        });
		Restangular.setDefaultHttpFields({withCredentials: true});


        Restangular.all('api/user/role/info').customGET().then(function(res) {
            if(res.success) {
                vm.userRole = res.content;
                console.log(vm.userRole);
            }
    	});
    }
})();