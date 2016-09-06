(function() {
    'use strict';

    angular
        .module('touhou')
        .controller('UserCreateCtrl', UserCreateCtrl);

    /* @ngInject */
    function UserCreateCtrl($state, $stateParams, User, Restangular, $modal, ElementService, Upload, $filter) {
        var vm = this;
        vm.role = $stateParams && $stateParams.role;
        vm.current_user = User.getUser();
        vm.filter = {};
        vm.displayCompany = false;

        vm.openUploadImgModal = openUploadImgModal;
        vm.uploadQRCode = uploadQRCode;
        vm.nextStep = nextStep;
        vm.submit = submit;
        vm.uploadBussinessCard = uploadBussinessCard;
        vm.uploadIdCard = uploadIdCard;
        
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

        function uploadBussinessCard(files, errFiles) {
	        angular.forEach(files, function(file) {
	            file.upload = Upload.upload({
	                url: 'http://115.29.163.20/api/file/upload',
	                methods: 'POST',
	                headers: {'Content-Type'  : 'multipart/form-data'},
	                withCredentials: true,
	                data: {file: file}
	            }).then(function (res) {
	            	if(res.data.success) {
	            		vm.filter.businessCard = res.data.content;
	            	}
	            });
	        });
        }

        function uploadIdCard(files, errFiles) {
	        angular.forEach(files, function(file) {
	            file.upload = Upload.upload({
	                url: 'http://115.29.163.20/api/file/upload',
	                methods: 'POST',
	                headers: {'Content-Type'  : 'multipart/form-data'},
	                withCredentials: true,
	                data: {file: file}
	            }).then(function (res) {
	            	if(res.data.success) {
	            		vm.filter.idCard = res.data.content;
	            	}
	            });
	        });
        }

        function nextStep() {
        	vm.displayCompany = true;
        }

        function submit() {
        	console.log(vm.role);
        	console.log(vm.filter);
        	var req = {};

        	if(vm.role === 'INVESTOR') {
        		req = {
        			businessCard: vm.filter.businessCard,
				  	company: {
				    	address: vm.filter.address,
				    	investRounds: [],
				    	name: vm.filter.companyName
				  	},
				  	idCard: vm.filter.idCard,
				  	inviteCode: vm.filter.inviteCode,
				  	user: {
				    	address: vm.filter.address,
				    	companyName: vm.filter.companyName,
				    	email: vm.filter.mail,
				    	name: vm.filter.name,
				    	password: vm.current_user.password,
				    	phone: vm.current_user.phone,
				    	photo: vm.filter.photo,
				    	position: vm.filter.position,
				    	role: vm.role,
				    	wechat: vm.filter.qrCode
				  	}
        		};
        		for(var key in vm.filter.rounds) {
     				req.company.investRounds.push(vm.filter.rounds[key]);
     			}
        	}else if(vm.role === 'FOUNDER') {
        		req = {
        			inviteCode: vm.filter.inviteCode,
				  	project: {
				    	address:  vm.filter.address,
				    	financingPhase: '',
				    	industry: vm.filter.industry,
				    	name: vm.filter.projectName
				  	},
				  	user: {
				    	address:  vm.filter.address,
				    	companyName: vm.filter.companyName,
				    	email: vm.filter.mail,
				    	name: vm.filter.name,
				    	password: vm.current_user.password,
				    	phone: vm.filter.phone,
				    	photo: vm.filter.photo,
				    	position: vm.filter.position,
				    	role: vm.role,
				    	wechat: vm.filter.qrCode
				  	}
        		};
        		for(var key in vm.filter.rounds) {
        			if(vm.filter.rounds[key]) {
        				req.project.financingPhase = vm.filter.rounds[key];
        			}
     			}
        	}else if(vm.role === 'EXPERT') {
        		req = {
        			address: vm.filter.address,
				  	industry: vm.filter.industry,
				  	service: vm.filter.service,
				  	user: {
				    	address: vm.filter.address,
				    	companyName: vm.filter.companyName,
				    	email: vm.filter.mail,
				    	name: vm.filter.name,
				    	password: vm.current_user.password,
				    	phone: vm.current_user.phone,
				    	photo: vm.filter.photo,
				    	position: vm.filter.position,
				    	role: vm.role,
				    	wechat: vm.filter.qrCode
				  	}
        		};
        	}
        	Restangular.all($filter('lowercase')(vm.role) + '/signUp').customPOST(req).then(function(res) {
	        		if(res.success) {
		        		vm.current_user = res.content;
		        		User.setUser(vm.current_user);
		        		$state.go('main.user.detail');
	        		}
	        	});
        	

        }

    }
})();