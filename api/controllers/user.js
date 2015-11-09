module.exports = function(app) {
	var User = app.models.user;

	var UserController = {
		index: function(req, res) {
			User.find({}, function(error, users) {
				if(error) {
					res.json({ error: 'Could not find the users.' });
				} else {
					res.json(users);
				}
			});
		},

		show: function(req, res) {
			var id = req.params.id;

			User.findById(id, function(error, user) {
				if(error) {
					res.json({error: 'Could not find the user.'});
				} else {
					res.json(user);
				}
			});
		},

		store: function(req, res) {
			var fields = req.body;

			new User({
				'name': fields.name,
				'email': fields.email,
				'password': fields.password
			}).save(function(error, user){
				if (error) {
					res.json({error: 'Could not save the user.'});
				} else {
					res.json({
						'message': "User successfully created!",
						'user': user
					});
				}
			});
		},

		update: function(req, res) {
			var id = req.params.id;
			var fields = req.body;

			User.findById(id, function(error, user) {
				for (var key in fields) {
				  if(fields[key]) {
					  user[key] = fields[key];
					}
				}

				user.save(function(error, user) {
					if(error) {
						res.json({error: 'Could not update the user.'});
					} else {
						res.json({
							'message': "User successfully updated!",
							'user': user
						});
					}
				});
			});
		}
	}

	return UserController;
};
