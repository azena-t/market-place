(function() {

	module.exports.index = function(req, res){
		var response = process(req,res);
		res.render(response.View, response.Data);
	}

	function process(req, res){
		return {
			'View': 'home',
			'Data':{
				'name':'Kevin'
			}
		};
	}

}());