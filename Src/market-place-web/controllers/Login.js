(function() {

	module.exports.index = function(req, res){
		var response = process(req, res);
		res.render(response.View, response.Data);
	}
	
	module.exports.restrict = function (req, res, next){
		if(req.session.user){
			console.log('Something');
			next();
		} else {
			res.redirect('/login');
		}
	}
	
	module.exports.authenticate = function(req, res){
	}

	function process(req, res){
		return {
			'View': 'login',
			'Data':{
			}
		};
	}

}());