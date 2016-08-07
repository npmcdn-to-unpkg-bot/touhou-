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
    function HeaderCtrl($rootScope, $state) {
        var vm = this;
    }
})();
