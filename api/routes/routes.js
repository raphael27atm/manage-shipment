module.exports = function(app) {
	var userController = app.controllers.user;

	app.get('/', function(req, res) {
    res.end('Servidor ON!');
	});

	// user routes
	app.get('/api/v1/users', userController.index);
	app.post('/api/v1/users', userController.store);
	app.get('/api/v1/users/:id', userController.show);
	app.put('/api/v1/users/:id', userController.update);
};