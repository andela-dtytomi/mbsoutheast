'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('about', {
			url: '/aboutus',
			templateUrl: 'modules/core/views/about.html'
		})
		.state('services', {
			url:'/services',
			templateUrl: 'modules/core/views/services.html'
		})
		.state('greentech', {
			url:'/greentech',
			templateUrl: 'modules/core/views/greentech.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.form.html'
		})
		.state('posttensioning',{
			url: '/posttension',
			templateUrl: 'modules/core/views/posttensoning.html'
		});
	}
]);