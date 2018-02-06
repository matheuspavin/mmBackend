'use strict';

const path = require('path');

require('app-module-path').addPath(path.join(__dirname, '/server'));

const bodyParser = require('body-parser');
const config = require('config/config');
const dev = config.runningMode !== 'prod';
const express = require('express');
const app = express();
const database = require("/server/infra/connnectDataBase.js");


/**
 * Express Setup
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

/**
 * Routes
 */
require('routes')(app);

app.use('/', require('./route/sessionRoute'));
app.use('/', sessionService.isAuthenticated, require('./route/garageRoute'));

app.post('/insert/garage', function(req, res){
	var garage = req.body;
	database.insertGarage(garage).then(function(result){
		result = result[0];
		var user = {};
		user.id_garage = result.id;
		user.password = garage.password;
		database.insertUser(user).then(function(result){
			res.send(user);
		})
	})
});

app.post('/insert/customer', function(req, res){
	var customer = req.body;
	database.insertCustomer(customer).then(function(result){
		result = result[0];
		var user = {};
		user.id_customer = result.id;
		user.password = customer.password;
		database.insertUser(user).then(function(result){
			res.send(user);
		})
	})
});

// FIXME: Precisa disso?? ⤵
process.on('uncaughtException', function (error) {
    console.log(error.stack);
});

/**
 * Server Listener
 */
var server = app.listen(3500);
server.timeout = 300000;
winston.info('### RUNNING MY MECHANIC BACKEND (' + (dev ? 'development' : 'production') + ' on : ' + server.address().port + ' ) ###');
