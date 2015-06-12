(function (angular) {
	'use strict';

	angular.module("dotastrat.login")
	.config([
		"$stateProvider", 
		loginUrlState
	]);

	function loginUrlState ($stateProvider) {
		$stateProvider.state("login", {
			url : "/login",
			templateUrl : "login/main.html",
		});
	}

})(angular);