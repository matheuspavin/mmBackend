const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const sessionService = require('./service/sessionService.js');

const customerRoute = require('./routes/customerRoute');
const garageRoute = require('./routes/garageRoute');
const sessionRoute = require('./routes/sessionRoute');
const usersRoute = require('./routes/usersRoute');
const carsRoute = require('./routes/carsRoute');

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
app.use('/cars', sessionService.isAuthenticated, carsRoute);


const server = app.listen(8081, function () {
	console.log("MyMechanic is running in development mode on ", server.address().address, " in the port", server.address().port);
});