(function(){
	function configuration(){

		var itemController = require('./controllers/itemController.js');

		var config = {
			'serverConfig' : {
				port : 8081
			},
			'resources' : [
				{
					method : 'GET',
					path : '/',
					handler : {
						file : 'index.html'
					}
				},
				{
					method : 'GET',
					path : '/static/{param*}',
					handler : {
						directory : {
							path : 'static'
						}
					}
				},
				{
					method : 'GET',
					path : '/items',
					handler : itemController
				},
				{
					method : 'POST',
					path : '/test',
					handler : function (request, reply){
						var payload = JSON.parse(request.payload);
						console.log(payload.name);
						//console.log(request);
						reply(payload);
					}
				}
			]
		};
		return config;
	}

	module.exports = configuration;
})();
