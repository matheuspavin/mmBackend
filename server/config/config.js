var config = {};

config.database = {};
config.database.user = process.env.ACADEMIC_DATABASE_USER || 'postgres';
config.database.db = process.env.ACADEMIC_DATABASE_DB || 'mymechanic';
config.database.pw = process.env.ACADEMIC_DATABASE_PW || '123456';
config.database.host = process.env.ACADEMIC_DATABASE_HOST || 'localhost';
config.database.port = process.env.ACADEMIC_DATABASE_PORT || 5432;
config.database.maxConnections = process.env.ACADEMIC_POOL_MAX || 10;
config.database.idleTimeoutMillis = process.env.ACADEMIC_POOL_TIMEOUT || 30000;
config.runningMode = process.env.NODE_ENV || 'dev';

module.exports = config;