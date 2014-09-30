'use strict';

//Seting up route
angular.module('admin').config(['$stateProvider', 
	function($stateProvider){
		$stateProvider.
		state('admin-dashboard',{
			url: '/admin',
			templateUrl: 'modules/admin/views/admin.dashboard.html'
		})
		.state('createBlog', {
			url: '/admin/blog/create',
			templateUrl: 'modules/admin/views/create-blog.client.view.html'
		});
	}
]);