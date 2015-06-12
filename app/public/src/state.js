(function (angular) {
	'use strict';

	angular.module("dotastrat")
	.config([
		"$urlRouterProvider",
		appState
	]);

	function appState ($urlRouterProvider) {
		$urlRouterProvider.otherwise("/login");
	}

})(angular);