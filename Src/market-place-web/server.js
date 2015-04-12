var hapi = require('hapi');
var server = new hapi.Server();

var serverConfig = {
	port : 8081
};

var indexConfig = {
	method : 'GET',
	path : '/',
	handler : {
		file : 'index.html'
	}
};

server.connection(serverConfig);

server.start(function(){
	console.log("Server running with config: " + serverConfig);
});

server.route(indexConfig);