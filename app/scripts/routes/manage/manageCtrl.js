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
    function ManageCtrl($http, $state, $window, ElementService, MoveService, Restangular) {
        var vm = this;
        //banner1('div', 'ul', 'li', 'dakadaka');
        //banner2('div', 'ul', 'li', 'touzilist')
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
            var timer3;
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
                timer3 = setInterval(function(){
                    console.log(1)
                    tab();
                },2000)
            }
            function mouser1() {
                clearInterval(timer3)
            }
            function mouseleave1(){
                time1()
            }
       }
       function banner2(obj, obj1, obj2, className) {
            var b = 0;
            var oDiv = ElementService.getByClass(obj, className);
            var oUl = angular.element(oDiv).find(obj1)[0];//angular.element(oDiv).find('ul')
            oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
            var aLi = angular.element(oUl).find(obj2);
            var oWidth = ElementService.getStyle(aLi[0],'width');
            angular.element(oUl).css({width: parseFloat(oWidth) * aLi.length+'px'})//angular.element(oUl).css()
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].style.width = oWidth;
            }
            vm.rightClick2 = rightClick2;
            vm.leftClick2 = leftClick2;
            vm.mouser2 = mouser2;
            vm.mouseleave2 = mouseleave2;
            time2()
            var bl = true;
            var timer2;
            function rightClick2() {
                if (bl) {
                    b--;
                    bl = !bl
                     if (b == -1) {
                            b = aLi.length/2-1;
                            oUl.style.left = -(b+1) * parseFloat(oWidth) + 'px';
                        }
                    MoveService.move(oUl, {'left': -b * parseFloat(oWidth)},{fn:function(){
                       
                        bl = !bl;
                    }})
                }
                //debugger
            }
            function leftClick2(){
                if (bl) {
                    bl=!bl;
                    tab();
                }
            }
            function tab(){
                b++;
                MoveService.move(oUl, {'left': -b * parseFloat(oWidth)},{fn:function(){
                       if (b == aLi.length/2) {
                            b = 0;
                            oUl.style.left = -b * parseFloat(oWidth) + 'px';
                       }
                        bl = true;
                    }})
            }
            function time2(){
                timer2 = setInterval(function(){
                    tab();
                },2000)
            }
            function mouser2() {
                clearInterval(timer2)
            }
            function mouseleave2(){
                time2()
            }
       }
        Restangular.all('common/newest/famous/investors').customGET().then(function(res) {
            console.log(res)
            if(res.success) {
               vm.newlist = res.content;
              setTimeout(function() {
                banner1('div', 'ul', 'li', 'dakadaka');
              },50)
            }else{
                alert(res.errMessage)
            }
        });
         Restangular.all('common/famous/templates').customGET().then(function(res) {
            console.log(res)
            if(res.success) {
               vm.modulelist = res.content;
              setTimeout(function() {
                banner2('div', 'ul', 'li', 'touzilist');
              },50)
            }else{
                alert(res.errMessage)
            }
        });
    }
})();
