/**
 * @ngdoc service
 * @name touhou.MoveService
 * @description
 * 
 * @example
 * function exampleCtrl(..., MoveService) {
 *     ...
 * }
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .factory('MoveService', MoveService);

    /* @ngInject */
    function MoveService($rootScope, Restangular, ElementService) {
        // Initialize MoveService
        var service = {
            move: move,
            banner1:banner1
        };
        return service;

        function move(obj,json,opational){
	
			var opational = opational || {};
			opational.time = opational.time || 300;
			opational.fn = opational.fn || null;
			opational.type = opational.type || 'ease-out';
			
			var start={};
			var dis={};
			for(var key in json){
				start[key]=parseInt(ElementService.getStyle(obj,key));
				dis[key]=json[key]-start[key];
			}
			
			var count=Math.round(opational.time/30);
			var n=0;
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				n++;
				
				for(var key in json){
					//办事
					switch(opational.type){
						case 'linear':
							var a = n/count;
							var cur=start[key]+dis[key]*a;
							break;
						case 'ease-in':
							var a=n/count;
							var cur=start[key]+dis[key]*a*a*a
							break;
						case 'ease-out':
							var a=1-n/count;
							var cur=start[key]+dis[key]*(1-a*a*a)
							break;	
					}
					
					if(key=='opacity'){
						obj.style.opacity=cur;
						obj.style.filter='alpha(opacity:'+cur*100+')';
					}else{
						obj.style[key]=cur+'px';
						
					}	
				}
				
				if(n==count){
					clearInterval(obj.timer);
					opational.fn && opational.fn();	
				}
			},30);
		}
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
