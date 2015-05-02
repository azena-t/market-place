(function(){
	var marketPlaceApp = angular.module('marketPlaceApp', ['ngRoute']);

	marketPlaceApp.config(['$routeProvider', function ($routeProvider){
		$routeProvider.when('/search', {
			templateUrl : 'static/partials/search.html',
			controller : 'searchController'
		})
		.when('/', {
			templateUrl : 'static/partials/home.html',
			controller : 'homeController'
		})
		.otherwise({
			redirectTo : '/'
		})
	}]);
})();