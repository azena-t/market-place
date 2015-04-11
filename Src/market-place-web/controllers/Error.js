(function() {

	module.exports.index = function(err, req, res, next){
		console.error(err.stack);
		res.send(500, 'Something went wrong');
	}

}());