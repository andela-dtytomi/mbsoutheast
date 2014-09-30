'use strict';

angular.module('admin')
	.controller('AdminController', ['$scope', 'Authentication',
		function($scope, Authentication) {
			$scope.authentication = Authentication;
			
			$scope.myVar = [0,0,0,0];
			$scope.goEvent = function(index){
				$scope.myVar[index] =Math.abs($scope.myVar[index] - 1);
			};
		}
	]);