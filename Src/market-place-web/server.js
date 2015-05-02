(function(){
	var hapi = require('hapi');
	var server = new hapi.Server();
	var config = require('./configuration.js');

	server.connection(config().serverConfig);

	config().resources.forEach(function(resource){
		server.route(resource);
	});

	server.start(function(){
		console.log("Server running with config: " + config().serverConfig.port);
	});
})();