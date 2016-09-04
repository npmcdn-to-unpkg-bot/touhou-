(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('FavoritesCtrl', FavoritesCtrl);

    /* @ngInject */
   
    function FavoritesCtrl($http, $state, $window, Restangular) {
        var vm = this;
        vm.favoriteList = [];
        vm.getfavor = getfavor;
        vm.showren = showren;
        vm.json = {
        	SEED:'种子轮',
        	ANGEL:'天使轮',
        	PRE_A:'Pre-A轮',
        	A:'A',
        	B:'B',
        	C:'C'
        };

        var res ={
		  "content": {
		    "content": [
		      {
		        "address": "上海",
		        "description": "金融",
		        "financingPhase": "SEED",
		        "foundDate": "2016/2/2",
		        "founderId": "2112",
		        "id": "2333",
		        "industry": "服务",
		        "integrity": "RED",
		        "inviterId": "string",
		        "isPrivate": true,
		        "level": 0,
		        "name": "丰厚资本",
		        "occupied": true,
		        "occupiedUser": "伍凯",
		        "publicity": "公开",
		        "region": "string",
		        "status": "OBSERVATION"
		      },
		      {
		        "address": "上海",
		        "description": "金融",
		        "financingPhase": "SEED",
		        "foundDate": "2016/2/2",
		        "founderId": "2112",
		        "id": "2333",
		        "industry": "服务",
		        "integrity": "RED",
		        "inviterId": "string",
		        "isPrivate": true,
		        "level": 0,
		        "name": "丰厚资本",
		        "occupied": true,
		        "occupiedUser": "伍凯",
		        "publicity": "公开",
		        "region": "string",
		        "status": "OBSERVATION"
		      }
		    ],
		    "page": 0,
		    "size": 0,
		    "total": 0
		  },
		  "errMessage": "string",
		  "success": true
		}
		if(res.success){
			var oUl = document.getElementById('xm_list');
			vm.favoriteList = res.content.content;
		}

		vm.showZhan = showZhan;

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
        	}else{
        		getlist.page = 0;
        	}
        	if (query) {
        		getlist.query = query;
        	}
        	if (round) {
        		getlist.round = round;
        	}
        		getlist.size = 10;
        	Restangular.setDefaultHeaders({
                'Content-Type'  : 'application/json;charset=UTF-8',
                // 'Access-Control-Allow-Origin': '*'
            });
            Restangular.setDefaultHttpFields({withCredentials: true});
        	Restangular.all('investor/project/favorites').customPOST(getlist).then(function(res) {
        			
	             if (res.success) {

                 }
	           });
        }
        getfavor();

        function showZhan(index) {
        	if(vm.favoriteList[index].displayOccupy) {
        		vm.favoriteList[index].displayOccupy = false;
        	}else {
        		vm.favoriteList[index].displaylist = false;
        		vm.favoriteList[index].displayOccupy = true;
        	}
        	
        }
        function showren(index){
        	if(vm.favoriteList[index].displaylist) {
        		vm.favoriteList[index].displaylist = false;
        	}else {
        		vm.favoriteList[index].displayOccupy = false;
        		vm.favoriteList[index].displaylist = true;
        		Restangular.all('project/{projectId}/hotDegrees').customPOST({projectId:vm.favoriteList[index].id}).then(function(res) {
        			
	               if (res.success) {
	               	vm.total = res.content.total;
	               	vm.degreeUsers = res.content.degreeUsers;
	               }
	           });
        	}
        	
        }
    }
})();