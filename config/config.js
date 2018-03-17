var config = {};

config.database = {};
config.database.user = 'postgres';
config.database.database = 'mymechanic';
config.database.password = '123456';
config.database.host = 'localhost';
config.database.port = 5432;
config.database.maxConnections = 10;
config.database.idleTimeoutMillis = 30000;
config.runningMode = 'dev';

module.exports = config;
