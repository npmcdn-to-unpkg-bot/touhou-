/**
 * @ngdoc overview
 * @name touhou.routes
 * @description
 * # touhou.routes
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
            .state('main', {
                templateUrl: 'scripts/shared/templates/main.html'
            })
            .state('main.index', {
                url: '/index',
                controller: 'IndexCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/index/indexCtrl.html'
            })
            .state('main.login', {
                url: '/login',
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/login/loginCtrl.html'
            })
            .state('main.manage', {
                url: '/manage',
                controller: 'ManageCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/manage/manageCtrl.html'
            })
            .state('main.recommend', {
                url: '/recommend',
                controller: 'RecommendCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/recommend/recommendCtrl.html'
            })
            .state('main.expert', {
                url: '/expert',
                controller: 'ExpertCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/expert/expertCtrl.html'
            })
            .state('main.authenticate', {
                url: '/authenticate',
                controller: 'AuthenticateCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/authenticate/authenticateCtrl.html'
            })
            .state('main.personalcenter', {
                url: '/personalcenter',
                controller: 'PersonalcenterCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/personalcenter/personalcenterCtrl.html'
            })
            .state('main.favorites', {
                url: '/favorites',
                controller: 'FavoritesCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/favorites/favoritesCtrl.html'
            })
            .state('main.message', {
                url: '/message',
                controller: 'MessageCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/message/messageCtrl.html'
            })
            .state('main.investorshome', {
                url: '/investorshome',
                controller: 'InvestorshomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/investorshome/investorshomeCtrl.html'
            })
            .state('main.resource', {
                url: '/resource',
                controller: 'ResourceCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/resource/resourceCtrl.html'
            })
            .state('main.sign', {
                url: '/sign',
                controller: 'SignCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/sign/signCtrl.html'
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
