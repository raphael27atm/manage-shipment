var express    = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
//var jwt = require('./services/jwt.js');

var app = express();

global.db = mongoose.connect('mongodb://localhost/manage-shipment');

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

//console.log(jwt.encode('olá', 'secret'));

load('models').then('controllers').then('routes').into(app);

var server = app.listen(1234, function(){
	console.log('api listening on', server.address().port);
});

module.exports = app;