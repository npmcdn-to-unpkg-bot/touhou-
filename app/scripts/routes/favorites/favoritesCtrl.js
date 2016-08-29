(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('FavoritesCtrl', FavoritesCtrl);

    /* @ngInject */
    function FavoritesCtrl($http, $state, $window, Restangular) {
        var vm = this;
        function getfavor(color, industry, page, query, round, size) {
        	var getlist = {};
        	if (color) {
        		getlist.color = color;
        	}
        	if (industry) {
        		getlist.industry = industry;
        	}
        	if (page) {
        		getlist.page = page;
        	}
        	if (query) {
        		getlist.query = query;
        	}
        	if (round) {
        		getlist.round = round;
        	}
        	if (size) {
        		getlist.size = size;
        	}
        	
        	Restangular.all('api/investor/project/invested/list').customPOST({
				  "page": 1,
				  "size": 1
	        }).then(function(res) {debugger;
	               console.log(res)
	        	});
        }
        getfavor()
    }
})();