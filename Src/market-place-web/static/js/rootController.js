(function(){

	var rootController = function($scope, $location, basketService, basketFactory){
		$scope.basket = basketFactory.getBasket();
		$scope.search = function(search){
			$scope.searchQuery = angular.copy($scope.searchTerm);
			$location.path('/search');
		}
		$scope.goHome = function(){
			$location.path('/');
		}
		$scope.addToBasket = function(item){
			basketService.add(item);
		}
	}

	angular.module('marketPlaceApp').controller('rootController', rootController);

	rootController.$inject = ['$scope', '$location', 'basketService', 'basketFactory'];
	
})();