(function(){
	function itemController(request, reply){
		var monk = require('monk');
		var db = monk('localhost:27017/market-place');
		db.get('items').find({}, function(error, items){
			if(error){
				console.log(error);
				reply(error);
			}
			var response = {};
			response.items = items;
			addLink(request.headers.host, response);
			reply(response);
			db.close();

		});
	}

	var addLink = function(host, response){
		var link = {};
		link.self = {};
		link.self.href = '//' + host + '/items';
		response._links = link;
	}

	module.exports = itemController;
})();