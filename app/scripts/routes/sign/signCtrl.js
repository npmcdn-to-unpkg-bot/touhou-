/**
 * @ngdoc controller
 * @name touhou.controller:SignCtrl
 * @description
 * Navigation header with brand selection and user role display, 
 * logout functions.
 */

(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('SignCtrl', SignCtrl);

    /* @ngInject */
    function SignCtrl($rootScope, $state, Restangular, User) {
       	var vm = this;
        vm.sign = sign;
        vm.getcode = getcode;

       function sign() {
       		if (!vm.phone || vm.phone === '') {
       			alert('请输入手机号');
       			return;
       		}
       		if (!vm.code || vm.code === '') {
       			alert('请输入验证码');
       			return;
       		}
       		if ((!vm.password1 || vm.password1 === '') || (!vm.password2 || vm.password2 === '')) {
       			alert('请输入密码');
       			return;
       		}
       		if (vm.password1 !== vm.password2) {
       			alert('请确认密码');
       			return;
       		}
        	Restangular.all('api/user/signUp/').customPOST({smsId:vm.verifyId,smsCode:vm.code,user:{phone: vm.phone,password: md5(vm.password1)}}).then(function(res) {
                if(res.success) {
                   User.setUser(res.content);
                   $state.go('main.user.detail', res.content);
                }
                if (!res.success) {
                	if (res.errMessage === 'ERR_SMS_CODE') {
                		alert('验证码不正确');
                    return;
                	}
                	if (res.errMessage === 'ERR_PHONE') {
                		alert('手机号不正确');
                    return;
                	}else{
                    alert(res.errMessage);
                  }
                }
        	});
        } 
        function getcode() {
        	var oCode = document.getElementById("code");
        	oCode.disabled = true;
        	setTimeout(function() {
        		oCode.disabled = false;
        	},60000);
        	if (!vm.phone || vm.phone === '') {
       			alert('请输入手机号')
       			return;
       		}
        	Restangular.all('/api/sms/send/' + vm.phone + '/VERIFICATION').customGET().then(function(res) {
                if(res.success) {
                	vm.verifyId = res.content;
                }
        	});
        }
    }
})();
