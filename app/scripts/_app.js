/**
 * @ngdoc overview
 * @name ccfeFrontend
 * @description
 * # ccfeFrontend
 *
 * Main module of the application.
 */

(function() {
    'use strict';

    angular
        .module('touhou', [
            'config', // Injected by ngConfig
            'angularSpinner',
            'apiMock', // TODO: Remove in production
            'ngAnimate',
            'ngAria',
            'ngMessages',
            'ui.router',
            'gettext', // angular-gettext for i8tn
            'mgcrea.ngStrap',
            '720kb.datepicker',
            'angular-table',
            'restangular',
            'ui.bootstrap',
            'angular-locker', // Easy methods for session/local storage
            'toastr', // Nice 'toastr' popup messages
            'ui.tree',
            'chart.js',
            'ngImgCrop',
            'lr.upload'
        ]);
})();