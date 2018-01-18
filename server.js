'use strict';

const path = require('path');

require('app-module-path').addPath(path.join(__dirname, '/server'));

const bodyParser = require('body-parser');
const config = require('config/config');
const dev = config.runningMode !== 'prod';
const express = require('express');
const app = express();


/**
 * Express Setup
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

/**
 * Routes
 */
require('routes')(app);

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
