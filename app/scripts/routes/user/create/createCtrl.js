(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserCreateCtrl', UserCreateCtrl);

    /* @ngInject */
    function UserCreateCtrl($state, $stateParams, User, Restangular) {
        var vm = this;
        vm.role = $stateParams && $stateParams.role;
    }
})();