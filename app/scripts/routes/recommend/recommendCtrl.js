/**
 * @ngdoc controller
 * @name touhou.controller:RecommendCtrl
 * @description
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('RecommendCtrl', RecommendCtrl);

    /* @ngInject */
    function RecommendCtrl($http, $state, $window, Restangular) {
        var vm = this;
        vm.getjigou = getfavor;
         vm.json = {
        	SEED:'种子轮',
        	ANGEL:'天使轮',
        	PRE_A:'Pre-A轮',
        	A:'A',
        	B:'B',
        	C:'C'
        };
        function getfavor(companyId, page, projectName, size) {
        	var getlist = {};
        	if (companyId) {
        		getlist.companyId = companyId;
        	}
        	if (page) {
        		getlist.page = page;
        	}else{
        		getlist.page = 0;
        	}
        	if (projectName) {
        		getlist.projectName = projectName;
        	}
        	
        		getlist.size = 9;
        	Restangular.setDefaultHeaders({
                'Content-Type'  : 'application/json;charset=UTF-8',
                // 'Access-Control-Allow-Origin': '*'
            });
            Restangular.setDefaultHttpFields({withCredentials: true});
        	Restangular.all('common/quality/projects').customPOST(getlist).then(function(res) {
        			console.log(res)
	             if (res.success) {
	             	vm.tuijian = res.content.content;
                 }else{
                 	alert(res.errMessage)
                 }
	           });
        }
        getfavor()
    }
})();
