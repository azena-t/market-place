(function(){
	
	var basketFactory = function(){
		var basket = {
			count: 0,
			price: 0.0
		}
		var items = [];
		return {
			getBasket: function(){
				return basket;
			},
			addItem: function(itemId, price){
				basket.count++;
				basket.price += Number(price);
				items.push(itemId);
			}
			
		};
	}
	
	angular.module('marketPlaceApp').factory('basketFactory', basketFactory);
	
})();