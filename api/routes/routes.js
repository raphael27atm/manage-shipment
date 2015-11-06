module.exports = function(app) {
	var userController = app.controllers.user;

	app.get('/', function(req, res) {
    res.end('Servidor ON!');
	});

	app.get('/api/v1/users', function(req, res) {
    userController.list(function(response) {
      res.json(response);
    });
	});

	app.post('/api/v1/register', function(req, res){
    var user = req.body;

    /*var payload = {
        'iss': req.hostname,
        'sub': user._id
    };

    var token = jwt.encode(payload, 'secret....');*/

    userController.store(user.name, user.email, user.password, function(response) {
      //response.token = token;

      res.json(response);
    });
	});
};