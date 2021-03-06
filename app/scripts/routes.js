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
            .state('main.jingpingku', {
                url: '/jingpingku',
                controller: 'JingpingkuCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/jingpingku/jingpingkuCtrl.html'
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
            .state('main.tochannel', {
                url: '/tochannel',
                controller: 'TochannelCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/tochannel/tochannelCtrl.html'
            })
            .state('main.addinformation', {
                url: '/addinformation',
                controller: 'AddinformationCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/addinformation/addinformationCtrl.html'
            })
            .state('main.topup', {
                url: '/topup',
                controller: 'TopupCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/topup/topupCtrl.html'
            })
            .state('main.wdxiangmu', {
                url: '/wdxiangmu',
                controller: 'WdxiangmuCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/wdxiangmu/wdxiangmuCtrl.html'
            })
            .state('main.expertsshow', {
                url: '/expertsshow',
                controller: 'ExpertsshowCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/expertsshow/expertsshowCtrl.html'
            })
            .state('main.module', {
                url: '/module',
                controller: 'ModuleCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/module/moduleCtrl.html'
            })
            .state('main.mdcneter', {
                url: '/mdcneter',
                controller: 'MdcneterCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/mdcneter/mdcneterCtrl.html'
            })
            .state('main.projects', {
                url: '/projects',
                controller: 'ProjectsCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/projects/projectsCtrl.html'
            })
            .state('main.fuhuaqi', {
                url: '/fuhuaqi',
                controller: 'PuhuaqiCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/fuhuaqi/fuhuaqiCtrl.html'
            })
             .state('main.fuhuaqilist', {
                url: '/fuhuaqilist',
                controller: 'FuhuaqilistCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/fuhuaqilist/fuhuaqilistCtrl.html'
            })
             .state('main.huoban', {
                url: '/huoban',
                controller: 'HuobanCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/huoban/huobanCtrl.html'
            })
             .state('main.feiyong', {
                url: '/feiyong',
                controller: 'FeiyongCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/feiyong/feiyongCtrl.html'
            })
             .state('main.wallet', {
                url: '/wallet',
                controller: 'WalletCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/wallet/walletCtrl.html'
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
            .state('main.user',{
                templateUrl: ''
            })
            .state('main.user.detail', {
                url: '/user/detail',
                controller: 'UserDetailCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/user/detail/detailCtrl.html'
            })
            .state('main.user.create', {
                url: '/user/create?:role',
                controller: 'UserCreateCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/user/create/createCtrl.html'
            })
            .state('main.favorites', {
                url: '/favorites',
                controller: 'FavoritesCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/routes/favorites/favoritesCtrl.html'
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
