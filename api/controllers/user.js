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
		show: function(id, callback) {
			User.findById(id, function(error, user) {
				if(error) {
					callback({error: 'Não foi possível encontrar o usuário.'});
				} else {
					callback(user);
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
		},
		update: function(id, name, email, password, callback) {
			User.findById(id, function(error, user) {
				if(name) {
					user.name = name
				}

				if(email) {
					user.email = email
				}

				if(password) {
					user.password = password
				}

				user.save(function(error, user) {
					if(error) {
						callback({error: 'Não foi possível salvar o usuário.'});
					} else {
						callback(user);
					}
				});
			});
		}
	}

	return UserController;
};
