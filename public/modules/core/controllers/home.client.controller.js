'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication','$timeout',
	function($scope, Authentication, $timeout) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		 $scope.INTERVAL = 3000;

		  var slides = $scope.slides = [
		  		{
			      image: '/modules/core/img/home/Home 3of 3.jpg'
			    },
			    {
			      image: '/modules/core/img/home/Home 1 of 4.JPG'
			    },
			    {
			      image: '/modules/core/img/home/Home2 of 4.JPG'
			    }
		  ];

		  $scope.currentIndex = 0;

		  $scope.setCurrentSlideIndex = function(index) {
		  	$scope.currentIndex = index;
		  };

		  $scope.isCurrentSlideIndex = function(index) {
		  	return $scope.currentIndex === index;
		  };

		   $scope.prevSlide = function () {
	            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	        };

	        $scope.nextSlide = function () {
	            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
	            $timeout($scope.nextSlide, $scope.INTERVAL);
	        };

	        function loadSlides() {
	        	$timeout($scope.nextSlide, $scope.INTERVAL);
	        };

	        loadSlides();
	}
]);