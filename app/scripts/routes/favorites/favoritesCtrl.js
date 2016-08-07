(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('FavoritesCtrl', FavoritesCtrl);

    /* @ngInject */
    function FavoritesCtrl($http, $state, $window) {
        var vm = this;
    }
})();