(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserDetailCtrl', UserDetailCtrl);

    /* @ngInject */
    function UserDetailCtrl($state, $stateParams, User) {
        var vm = this;
        vm.currentUser = User.getUser();
        console.log(vm.currentUser);
    }
})();