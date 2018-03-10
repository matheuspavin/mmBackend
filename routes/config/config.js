var config = {};

config.database = {};
config.database.user = 'postgres';
config.database.db = 'mymechanic';
config.database.pw = '123456';
config.database.host = 'localhost';
config.database.port = 5432;
config.database.maxConnections = 10;
config.database.idleTimeoutMillis = 30000;
config.runningMode = 'dev';

module.exports = config;
