function configuration(){

	var config = {
		'serverConfig' : {
			port : 8081
		},
		'indexConfig' : {
			method : 'GET',
			path : '/',
			handler : {
				file : 'index.html'
			}
		},
		'staticConfig' : {
			method: 'GET',
		    path: '/static/{param*}',
		    handler: {
		        directory: {
	            	path: 'static'
	    		}
		    }
		}
	};
	return config;
}

module.exports = configuration;