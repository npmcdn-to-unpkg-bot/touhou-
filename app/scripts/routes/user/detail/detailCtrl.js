(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserDetailCtrl', UserDetailCtrl);

    /* @ngInject */
    function UserDetailCtrl($state, $stateParams, User, Restangular, ElementService) {
        var vm = this;
        vm.currentUser = User.getUser();
       	console.log(vm.currentUser);

        vm.displayMyWallet = false;
        vm.trunToMyWallet = trunToMyWallet;
        vm.goshoucang = goshoucang;
        Restangular.all('api/user/role/info').customGET().then(function(res) {
            if(res.success) {
                res.content.authenticated = true;
                User.setRole(res.content);
                vm.userRole = User.getRole();
                console.log(vm.userRole);
            }
    	});
        function tabactive(dom){
            var oUl = document.getElementById("tab_ul")
            var aLi = ElementService.getByClassarr(oUl, 'tx_nav');
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].class = 'tx_nav';
                dom.target.className = 'tx_nav active';
            }
        }
        function trunToMyWallet(click) {
            tabactive(click);
            
            vm.displayMyWallet = true;
        }
        function goshoucang(){
            $state.go('main.favorites')
        }
    }
})();