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
			    {
			      image: '/modules/core/img/tensioned21.jpg'
			    },
			    {
			      image: '/modules/core/img/P2110387.jpg'
			    }
		  ];
		  $scope.addSlide = function() {
		    var newWidth = 600 + slides.length;
		    slides.push({
			      image: 'http://placekitten.com/' + newWidth + '/300',
			      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
			        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			    });
			  };
			  for (var i=0; i<4; i++) {
			    $scope.addSlide();
			  }

		  $scope.myInterval = 3000;
		  $scope.slides = [
		    {
		      image: '/modules/core/img/thumb.jpg'
		    },
		    {
		      image: '/modules/core/img/elevated-PT1.jpg'
		    },
		    {
		      image: '/modules/core/img/tensioned21.jpg'
		    },
		    {
		      image: '/modules/core/img/P2110387.jpg'
		    }
		  ];
	}
]);