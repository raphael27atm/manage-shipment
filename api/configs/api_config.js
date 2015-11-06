var express = require('express');
var bodyParser = require('body-parser');

var allowCors = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
}

var app = module.exports = express();

app.listen(1234, function(){
	console.log('api server on');
})

app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));