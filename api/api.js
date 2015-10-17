var express  = require('express');
var mongoose = require('mongoose');

var app = express();

var server = app.listen(3000, function(){
	console.log('api listening on', server.address().port);
});

mongoose.connect('mongodb://localhost/manage-shipment-dev');