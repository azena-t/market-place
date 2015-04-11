(function() {
	/*HANDLER*/
	
	module.exports.register = function(username, password, emailaddress, firstName, lastName){
		var newUser = {
			username: username,
			email: emailaddress,
			firstname: firstName,
			lastname: lastName
		}
		
		var monk = require('monk');
		
		var username = process.env.market_place_user;
		var password = process.env.market_place_key;

		var db = monk('http://localhost:27017/market-place', {
			username: username,
			password: username
		});
		var exists = false;
		var users = db.get('users');
		users.find({},function(error, docs){
			docs.forEach(function(user){
				if(user.email == emailaddress){
					exists = true;
				}
			});
			if(exists == false){
				users.insert(newUser);
				console.log('inserted user');
			}
		});
		
		db.close();
	}
	
	
}());