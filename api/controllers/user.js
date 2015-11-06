module.exports = function(app) {
	var User = app.models.user;

	var UserController = {
		list: function(callback) {
			User.find({}, function(error, users) {
				if(error) {
					callback({error: 'Could not find the users.'});
				} else {
					callback(users);
				}
			});
		},
		store: function(name, email, password, callback) {
			new User({
				'name': name,
				'email': email,
				'password': password
			}).save(function(error, user){
				if (error) {
					callback({error: 'Could not save the user.'});
				} else {
					callback({
						'message': "User create success!",
						'user': user
					});
				}
			});
		}
	}

	return UserController;
};
