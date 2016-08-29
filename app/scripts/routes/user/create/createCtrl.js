(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserCreateCtrl', UserCreateCtrl);

    /* @ngInject */
    function UserCreateCtrl($state, $stateParams, User, Restangular, $modal, ElementService, Upload) {
        var vm = this;
        vm.role = $stateParams && $stateParams.role;
        vm.current_user = User.getUser();
        vm.filter = {};
        vm.displayCompany = false;

        vm.openUploadImgModal = openUploadImgModal;
        vm.uploadQRCode = uploadQRCode;
        vm.nextStep = nextStep;
        vm.submit = submit;
        
        function openUploadImgModal(type) {
        	var ModalCtrl = ['$scope', function($scope) {
        		$scope.myImage = '';
			    $scope.myCroppedImage = '';

			    $scope.handleFileSelect = function (evt) {
			    	var evt = evt || window.event;
			      	var file = evt.currentTarget.files[0];
			      	var reader = new FileReader();
			      	reader.onload = function (evt) {
			        	$scope.$apply(function($scope) {
			          		$scope.myImage = evt.target.result;
			        	});
			      	};
			      	reader.readAsDataURL(file);
			    };

			    $scope.cropImgChanged = function (evt) {
			    	urltoFile($scope.myCroppedImage, 'a.png', 'image/png').then(function(file){
			    		$scope.cropImgs = [file];
			    	});
			    }

                $scope.confirm = function() {
                };

                $scope.uploadFiles = function(files, errFiles) {
			        $scope.files = files;
			        $scope.errFiles = errFiles;
			        angular.forEach(files, function(file) {
			            file.upload = Upload.upload({
			                url: 'http://115.29.163.20/api/file/upload',
			                methods: 'POST',
			                headers: {'Content-Type'  : 'multipart/form-data'},
			                withCredentials: true,
			                data: {file: file}
			            }).then(function (res) {
			            	if(res.data.success) {
			            		vm.filter.photo = res.data.content;
			                	modal.$promise.then(modal.hide());
			            	}
			            });
			        });
			    };

				function urltoFile(url, filename, mimeType){
				    return (fetch(url)
				        .then(function(res){return res.arrayBuffer();})
				        .then(function(buf){return new File([buf], filename, {type:mimeType});})
				    );
				}
            }];

            var modal = $modal({
                templateUrl: 'scripts/routes/user/create/_upload-img-modal.html',
                controller: ModalCtrl,
                show: false,
                backdrop: 'static',
                keyboard: false
            });
            modal.$promise.then(modal.show);
        }

        function uploadQRCode(files, errFiles) {
	        angular.forEach(files, function(file) {
	        	debugger
	            file.upload = Upload.upload({
	                url: 'http://115.29.163.20/api/file/upload',
	                methods: 'POST',
	                headers: {'Content-Type'  : 'multipart/form-data'},
	                withCredentials: true,
	                data: {file: file}
	            }).then(function (res) {
	            	if(res.data.success) {
	            		vm.filter.qrCode = res.data.content;
	            	}
	            });
	        });
        }

        function nextStep() {
        	vm.displayCompany = true;
        }

        function submit() {
        	$state.go('main.user.detail');
        }

    }
})();