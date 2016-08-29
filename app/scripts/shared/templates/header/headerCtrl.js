/**
 * @ngdoc controller
 * @name touhou.controller:HeaderCtrl
 * @description
 * Navigation header with brand selection and user role display, 
 * logout functions.
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('HeaderCtrl', HeaderCtrl);

    /* @ngInject */
    function HeaderCtrl($rootScope, $state, $document, ElementService, User, Restangular) {
        var vm = this;
        vm.current_user = User.getUser();
        vm.logout = logout;
        
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            $rootScope.previousState = {
                name: fromState.name,
                params: fromParams
            };

            var isUserDetail = (toState.name === 'main.user.detail');
            if(isUserDetail) {
                vm.current_user = User.getUser();
            }
        });

        //main menu switch effect
        var navPills = ElementService.getByClass('ul', 'nav-pills');
        var liArr = angular.element(navPills).find('li');
        angular.forEach(liArr, function(item, index) {
        	if(angular.element(item).children().attr('ui-sref') === $state.current.name) {
        		var liActive = ElementService.getByClass('li', 'active', 'nav-pills');
        		angular.element(liActive).removeClass('active');
        		angular.element(item).addClass('active');
        		return;
        	}
        });
        angular.element(navPills).find('li').on('click', function(e) {
        	if(angular.element(e.target).parent().hasClass('active')) {
        		return;
        	}else{
        		var liActive = ElementService.getByClass('li', 'active', 'nav-pills');
        		angular.element(liActive).removeClass('active');
        		angular.element(e.target).parent().addClass('active');
        	}
        });
        var loginBtn = ElementService.getByClass('div', 'login');
        var signBtn = ElementService.getByClass('div', 'sign');
        angular.element(loginBtn).on('click', function(e) {
        	var liActive = ElementService.getByClass('li', 'active', 'nav-pills');
        	angular.element(liActive).removeClass('active');
        });
        angular.element(signBtn).on('click', function(e) {
        	var liActive = ElementService.getByClass('li', 'active', 'nav-pills');
        	angular.element(liActive).removeClass('active');
        });

        function logout() {
            Restangular.all('user/logout').customGET().then(function(res) {
                if(res.success) {
                    $state.go('main.login'); // turn to login
                    User.setUser({}); // clear user session
                    User.setRole({}); // clear user role
                    vm.current_user = User.getUser(); // get user again
                }
            });
        }
    }
})();
