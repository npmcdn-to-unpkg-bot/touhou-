(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserDetailCtrl', UserDetailCtrl);

    /* @ngInject */
    function UserDetailCtrl($state, $stateParams, User, Restangular, ElementService, $http) {
        var vm = this;
        vm.currentUser = User.getUser();
       	console.log(vm.currentUser);

        vm.displayMyWallet = false;
        vm.trunToMyWallet = trunToMyWallet;
        vm.goshoucang = goshoucang;
        Restangular.all('user/role/info').customGET().then(function(res) {
            if(res.success) {
                User.setRole(res.content);
                vm.userRole = User.getRole();
                console.log(vm.userRole);

                /*Restangular.all('investor/project/invested/list').customPOST({page: 0, size: 1}).then(function(res) {
                    debugger;
                    console.log(res);
                });*/

            }
    	});

        $http({
            method: 'POST',
            url: 'http://115.29.163.20/api/investor/project/invested/list',
            headers: {
               'Content-Type': 'application/json;charset=UTF-8'
            },
            withCredentials: true,
            data: {page: 0, size: 1}
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
            Restangular.all('wallet/balance').customGET().then(function(res) {
                    if(res.success) {
                      vm.money = res.content;
                    }else{
                        console.log(res.errMessage)
                    }
                });
            vm.displayMyWallet = true;
        }
        function goshoucang(){
            $state.go('main.favorites')
        }
    }
})();