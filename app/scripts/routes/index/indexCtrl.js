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
    function IndexCtrl($http, $state, $window, ElementService, MoveService, Restangular) {
        var vm = this;
        vm.json = {
            SEED:'种子轮',
            ANGEL:'天使轮',
            PRE_A:'Pre-A轮',
            A:'A',
            B:'B',
            C:'C'
        };
        banner('div', 'ul', 'li', 'index_banner');
       function banner(obj, obj1, obj2, className) {
            var n = 0;
            var oDiv = ElementService.getByClass(obj, className);
            var oUl = angular.element(oDiv).find(obj1)[0];//angular.element(oDiv).find('ul')
            var oWidth = ElementService.getStyle(oDiv,'width');
            oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
            var aLi = angular.element(oUl).find(obj2);
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
       //banner1('div', 'ul', 'li', 'in_list');
       //banner2('div', 'ul', 'li', 'in_xiangm');
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
       Restangular.all('common/home/investor').customGET().then(function(res) {
            console.log(res)
            if(res.success) {
                vm.perlist = res.content;
                vm.touzixm = '';
                setTimeout(function() {
                   banner1('div', 'ul', 'li', 'in_list');
                },50)
            }else{
                alert(res.errMessage)
            }
        });
       Restangular.all('common/home/projects').customGET().then(function(res) {
            console.log(res)
            if(res.success) {
                vm.xmlist = res.content;
                vm.listarr = [];
                var listarr1 = [];
                var number = 0;
                for (var i = 0; i < vm.xmlist.projects.length; i++) {
                    number++;
                    listarr1.push(vm.xmlist.projects[i]);
                    if (number == 4) {
                        vm.listarr.push(listarr1)
                        listarr1 = [];
                    }
                    if (i == vm.xmlist.projects.length-1) {
                        vm.listarr.push(listarr1)
                    }
                }
                console.log(vm.listarr);
                setTimeout(function() {
                    banner2('div', 'ul', 'li', 'in_xiangm')
                },2000)
            }else{
                alert(res.errMessage)
            }
        });
    }
})();
