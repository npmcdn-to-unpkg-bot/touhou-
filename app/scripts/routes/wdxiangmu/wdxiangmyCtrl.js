(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('WdxiangmuCtrl', WdxiangmuCtrl);

    /* @ngInject */
    function WdxiangmuCtrl($http, $state, $window, ElementService) {
        var vm = this;
        vm.selectlist = selectlist;
        var oXze = document.getElementById('xze');
        var oGongkai = document.getElementById('gongkai');
        var aDiv = oXze.getElementsByTagName('div');
        function selectlist(abs){
        	oXze.style.display = 'block';
        }
    
        for (var i = 0; i < aDiv.length; i++) {
        	aDiv[i].onclick = function() {
        		console.log(this.innerHTML)

        		oGongkai.innerHTML = this.innerHTML;
        		oXze.style.display = 'none';
        	}
        }
    }
})();