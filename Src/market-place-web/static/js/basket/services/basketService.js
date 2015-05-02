(function(){
	var basketService = function(basketFactory){
		return {
			add: function(item){
				basketFactory.addItem(item.itemId, item.price);
			}
		};
	}
	
	angular.module('marketPlaceApp').service('basketService', basketService);
	
	basketService.$inject = ['basketFactory'];
	
})();