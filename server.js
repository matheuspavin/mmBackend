const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const sessionService = require('./service/sessionService.js');

var customerRoute = require('./routes/customerRoute')
var garageRoute = require('./routes/garageRoute')
var sessionRoute = require('./routes/sessionRoute')
var usersRoute = require('./routes/usersRoute')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
	next();
});

app.options('*', function (req, res, next) {
	res.end();
});

app.use('/', require('./routes/sessionRoute'));
app.use('/garages', sessionService.isAuthenticated, garageRoute);
app.use('/customer', sessionService.isAuthenticated, customerRoute);
app.use('/users', sessionService.isAuthenticated, usersRoute);


const server = app.listen(8081, function () {
	console.log("meuMecanico rodando em modo desenvolvimento no ip: ", server.address().address, " e na porta", server.address().port);
});