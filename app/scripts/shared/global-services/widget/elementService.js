/**
 * @ngdoc service
 * @name touhou.ElementService
 * @description
 * 
 * @example
 * function exampleCtrl(..., ElementService) {
 *     ...
 * }
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .factory('ElementService', ElementService);

    /* @ngInject */
    function ElementService($rootScope, Restangular) {
        // Initialize ElementService
        var service = {
            getByClass: getByClass,
            getStyle: getStyle,
            getByClassarr:getByClassarr
        };
        return service;

        //
        /**
         * @description
         * get element by class
         * @example
         * ElementService.getByClass('li', 'active', 'nav-pills')
         */
        function getByClass(dom, className, parentClass) {
            var domArr = angular.element(document).find(dom);
            var target = null;
            angular.forEach(domArr, function(item, index) {
                if(parentClass && parentClass !== '') {
                    if(angular.element(item).hasClass(className) && angular.element(item).parent().hasClass(parentClass)){
                        target = item;
                        return;
                    }
                }else {
                    if(angular.element(item).hasClass(className)){
                        target = item;
                        return;
                    }
                }
            });
            return target;
        }
        function getByClassarr(oParent,sClass){
        var aEle=oParent.getElementsByTagName('*'); 
        var result=[];
        for(var i=0;i<aEle.length;i++){
            var arr=aEle[i].className.split(' ')    
            for(var j=0;j<arr.length;j++){
                if(arr[j]==sClass){
                    result.push(aEle[i]);   
                }
            }
        }
        return result;
    }

        //get computed style
        function getStyle(obj, name){
            return (obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name]);
        }
    }

})();
