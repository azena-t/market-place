var hapi = require('hapi');
var server = new hapi.Server();
var config = require('./configuration.js');

server.connection(config().serverConfig);

server.route(config().indexConfig);
server.route(config().staticConfig);

server.start(function(){
	console.log("Server running with config: " + config().serverConfig.port);
});
