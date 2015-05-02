(function(){

	var homeController = function($scope, $http){
		$scope.itemOfTheDay = {
			name: 'Floral Pillow Covers',
			price: '20.00',
			description: 'Wonderful home made, envelope flap, flora pillow covers. Includes two pillow covers to fit an 18 x 18 inch pillow insert',
			itemId: 'fpc1',
			imgUri: 'fpc1'
		};
		/*$http.get('/basket/id').success(function(data){
			$scope.basket.items = data;
		});*/
	}

	angular.module('marketPlaceApp').controller('homeController', homeController);

	homeController.$inject = ['$scope', '$http'];

})();