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
            getStyle: getStyle
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

        //get computed style
        function getStyle(obj, name){
            return (obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name]);
        }
    }

})();
