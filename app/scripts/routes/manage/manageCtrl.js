/**
 * @ngdoc controller
 * @name touhou.controller:ManageCtrl
 * @description
 * Login page controller
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('ManageCtrl', ManageCtrl);

    /* @ngInject */
    function ManageCtrl($http, $state, $window, ElementService, MoveService) {
        var vm = this;
        banner1('div', 'ul', 'li', 'dakadaka');
        banner1('div', 'ul', 'li', 'touzilist')
       function banner1(obj, obj1, obj2, className) {
            var a = 0;
            var oDiv = ElementService.getByClass(obj, className);
            var oUl = angular.element(oDiv).find(obj1)[0];//angular.element(oDiv).find('ul')
            oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
            var aLi = angular.element(oUl).find(obj2);
            var oWidth = ElementService.getStyle(aLi[0],'width');
            angular.element(oUl).css({width: parseFloat(oWidth) * aLi.length+'px'})//angular.element(oUl).css()
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].style.width = oWidth;
            }
            vm.rightClick1 = rightClick1;
            vm.leftClick1 = leftClick1;
            vm.mouser1 = mouser1;
            vm.mouseleave1 = mouseleave1;
            time1()
            var bl = true;
            var timer1;
            function rightClick1() {
                if (bl) {
                    a--;
                    bl = !bl
                     if (a == -1) {
                            a = aLi.length/2-1;
                            oUl.style.left = -(a+1) * parseFloat(oWidth) + 'px';
                        }
                    MoveService.move(oUl, {'left': -a * parseFloat(oWidth)},{fn:function(){
                       
                        bl = !bl;
                    }})
                }
                //debugger
            }
            function leftClick1(){
                if (bl) {
                    bl=!bl;
                    tab();
                }
            }
            function tab(){
                a++;
                MoveService.move(oUl, {'left': -a * parseFloat(oWidth)},{fn:function(){
                       if (a == aLi.length/2) {
                            a = 0;
                            oUl.style.left = -a * parseFloat(oWidth) + 'px';
                       }
                        bl = true;
                    }})
            }
            function time1(){
                timer1 = setInterval(function(){
                    tab();
                },2000)
            }
            function mouser1() {
                clearInterval(timer1)
            }
            function mouseleave1(){
                time1()
            }
       }
    }
})();
