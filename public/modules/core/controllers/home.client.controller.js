'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		 $scope.myInterval = 5000;
		  var slides = $scope.slides = [
		  		{
			      image: '/modules/core/img/thumb.jpg'
			    },
			    {
			      image: '/modules/core/img/elevated-PT1.jpg'
			    },
			    // {
			    //   image: '/modules/core/img/tensioned21.jpg'
			    // },
			    {
			      image: '/modules/core/img/P2110387.jpg'
			    }
		  ];
	}
]);