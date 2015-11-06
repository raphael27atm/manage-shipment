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
					res.json({error: 'Não foi possível encontrar o usuário.'});
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
						'message': "User create success!",
						'user': user
					});
				}
			});
		},
		update: function(req, res) {
			var fields = req.body;

			User.findById(id, function(error, user) {
				if(fields.name) {
					user.name = fields.name
				}

				if(fields.email) {
					user.email = fields.email
				}

				if(fields.password) {
					user.password = fields.password
				}

				user.save(function(error, user) {
					if(error) {
						res.json({error: 'Could not update the user.'});
					} else {
						res.json(user);
					}
				});
			});
		}
	}

	return UserController;
};
