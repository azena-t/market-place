var hapi = require('hapi');
var server = new hapi.Server();
var config = require('./configuration.js');

/*
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
var staticConfig = {
    method: 'GET',
    path: '/static/{param*}',
    handler: {
        directory: {
            path: 'static'
        }
    }
}*/

server.connection(config.serverConfig);

server.route(config.indexConfig);
server.route(config.staticConfig);

server.start(function(){
	console.log("Server running with config: " + serverConfig);
});
