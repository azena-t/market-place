(function(){
	var searchController = function($scope, $http){
		$scope.results = {};
		$http.get('/items').success(function(data){
			$scope.results.data = data;
		});
	}
	angular.module('marketPlaceApp').controller('searchController', searchController);
	searchController.$inject = ['$scope', '$http'];
})();