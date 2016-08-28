(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('FavoritesCtrl', FavoritesCtrl);

    /* @ngInject */
    function FavoritesCtrl($http, $state, $window, Restangular) {
        var vm = this;
        Restangular.all('api/investor/project/invested/list').customPOST({
			  "page": 1,
			  "size": 1
        }).then(function(res) {
               console.log(res)
        	});
    }
})();