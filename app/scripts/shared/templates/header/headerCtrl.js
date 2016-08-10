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
    function HeaderCtrl($document, ElementService) {
        var vm = this;

        //main menu switch effect
        var navPills = ElementService.getByClass('ul', 'nav-pills');
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
    }
})();
