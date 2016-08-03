/**
 * @ngdoc overview
 * @name ccfeFrontend.routes
 * @description
 * # ccfeFrontend.routes
 *
 * Routes module. All app states are defined here.
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .config(routerHelperProvider);

    /* @ngInject */
    function routerHelperProvider($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            /* Main state: CCFE user logged in state, with common header, footer */
            .state('index', {
                url: '/index',
                controller: 'IndexCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/index/indexCtrl.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/login/loginCtrl.html'
            })
            .state('manage', {
                url: '/manage',
                controller: 'ManageCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/manage/manageCtrl.html'
            })
            .state('recommend', {
                url: 'recommend',
                controller: 'RecommendCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/recommend/recommendCtrl.html'
            })
            .state('expert', {
                url: '/expert',
                controller: 'ExpertCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/expert/expertCtrl.html'
            })
            .state('authenticate', {
                url: '/authenticate',
                controller: 'AuthenticateCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/authenticate/authenticateCtrl.html'
            })
            .state('personalcenter', {
                url: '/personalcenter',
                controller: 'PersonalcenterCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/personalcenter/personalcenterCtrl.html'
            })
            .state('investorshome', {
                url: '/investorshome',
                controller: 'InvestorshomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/investorshome/investorshomeCtrl.html'
            })
            .state('resource', {
                url: '/resource',
                controller: 'ResourceCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/resource/resourceCtrl.html'
            })
            .state('error', {
                templateUrl: 'scripts/shared/templates/error.html'
            })
            .state('error.404', {
                url: '/error/404',
                templateUrl: 'scripts/routes/error/404Ctrl.html'
            })
            .state('error.500', {
                url: '/error/500',
                templateUrl: 'scripts/routes/error/500Ctrl.html'
            })
            .state('error.403', {
                url: '/error/403',
                templateUrl: 'scripts/routes/error/403Ctrl.html'
            })
            
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;
    }
})();
