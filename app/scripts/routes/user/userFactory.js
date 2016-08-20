/**
 * @ngdoc service
 * @name touhou.User
 * @description
 * Getter and setter methods to store user in session.
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .factory('User', User);

    /* @ngInject */
    function User(locker, $rootScope) {

        var session = locker.driver('session');
        // Namespace differently so that they can be grouped for reset methods
        var current_user = session.namespace('current.user');
        
        
        var service = {
            setUser: setUser,
            getUser: getUser
        };

        return service;

        function setUser(user) {
            current_user.put('user', user);
        }

        function getUser() {
            return current_user.get('user');
        }
        
    }
})();
