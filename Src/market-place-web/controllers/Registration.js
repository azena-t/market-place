(function() {
	/*CONTROLLER*/
	var errors = {};
	errors.hasErrors = false;

	module.exports.index = function(req, res){
		res.render('register');
	}
	
	module.exports.registerUser = function(req, res){
		res.redirect('/');
		var username = validUsername(req.body.username.trim());
		var password = validPassword(req.body.password.trim(), req.body.passwordConf.trim(), username);
		var email = validEmail(req.body.emailAddress.trim());
		var firstName = validFirstName(req.body.firstname.trim());
		console.log('about to try lastname');
		var lastName = validLastName(req.body.lastname.trim());
		if(errors.hasErrors){
			res.redirect('/register', errors);
		} else {
			var registrationHandler = require('../handlers/Registration');
			var registrationResult = registrationHandler.register(username, password, email, firstName, lastName);
			if(registrationResult.hasErrors){
				res.redirect('/register', registrationResult);
			} else {
				res.redirect('/login', {message: 'You have successfully registered. Please log in.', status: 'OK'});
			}
		}
	}
	
	function validLastName(name){
		if(isNotNullOrEmpty(name)){
			return name;
		}
		errors.hasErrors = true;
		errors.lastNameErrors = "No Last Name provided";
	}
	
	function validFirstName(name){
		if(isNotNullOrEmpty(name)){
			return name;
		}
		errors.hasErrors = true;
		errors.firstNameErrors = "No First Name provided";
	}
	
	function validEmail(email){
		if(isNotNullOrEmpty(email)){
			return email;
		}
		errors.hasErrors = true;
		errors.emailErrors = "No email provided";
	}
	
	function validUsername(username){
		if(isNotNullOrEmpty(username)){
			return username;
		}
		errors.hasErrors = true;
		errors.usernameError = "No username provided";
	}
	
	function validPassword(password, passConf, username){
		if(isNotNullOrEmpty(password)){
			if(password == passConf){
				if(password.indexOf(username) == -1){
					return password;
				} else {
					errors.hasErrors = true;
					errors.passwordError = "Password contains username";
				}
			} else {
				errors.hasErrors = true;
				errors.passwordError = "Passwords are not the same";
			}
		} else {
			errors.hasErrors = true;
			errors.passwordError = "No password provided";
		}
	}
	
	function isNotNullOrEmpty(data){
		if(data != "" && data != null){
			return true;
		}
		return false;
	}

}());