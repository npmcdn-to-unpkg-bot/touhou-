/**
 * @ngdoc controller
 * @name touhou.controller:IndezCtrl
 * @description
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('IndexCtrl', IndexCtrl);

    /* @ngInject */
    function IndexCtrl($http, $state, $window, ElementService, MoveService) {
        var vm = this;
        var n = 0;
        var oDiv = ElementService.getByClass('div', 'index_banner');
        var oUl = angular.element(oDiv).find('ul')[0];//angular.element(oDiv).find('ul')
        var oWidth = ElementService.getStyle(oDiv,'width');
        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
        var aLi = angular.element(oUl).find('li');
        angular.element(oUl).css({width: parseFloat(oWidth) * aLi.length+'px'})//angular.element(oUl).css()
       	for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.width = oWidth;
        }
        vm.rightClick = rightClick;
        vm.leftClick = leftClick;
        vm.mouser = mouser;
        vm.mouseleave = mouseleave;
        time()
        var bl = true;
        var timer;
        function rightClick() {
            if (bl) {
            	n--;
            	bl = !bl
                 if (n == -1) {
                        n = aLi.length/2-1;
                        oUl.style.left = -(n+1) * parseFloat(oWidth) + 'px';
                    }
            	MoveService.move(oUl, {'left': -n * parseFloat(oWidth)},{fn:function(){
                   
                    bl = !bl;
                }})
            }
        	//debugger
        }
        function leftClick(){
            if (bl) {
                bl=!bl;
                tab();
            }
        }
        function tab(){
            n++;
            MoveService.move(oUl, {'left': -n * parseFloat(oWidth)},{fn:function(){
                   if (n == aLi.length/2) {
                        n = 0;
                        oUl.style.left = -n * parseFloat(oWidth) + 'px';
                   }
                    bl = true;
                }})
        }
        function time(){
            timer = setInterval(function(){
                tab();
            },2000)
        }
        function mouser() {
            clearInterval(timer)
        }
        function mouseleave(){
            time()
        }
        
    }
})();
