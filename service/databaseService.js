const pg = require('pg');
const co = require('co');
const Pool = require('pg-pool');

const poolConfig = {
    user: "postgres",
    database: "mymechanic",
    password: 123456,
    host: "localhost",
    port: "5432",
    max: 5,
    idleTimeoutMillis: 30000
};

const pool = new Pool(poolConfig);

const get = co.wrap(function* (sql, params) {
    const rows = yield query(sql, params);
    return rows[0];
});

const query = function(sql, params) {

    (async (resolve, reject) => {
        const client = await pool.connect();
        try {
          const res = await client.query(sql, params);
          return res;
        } catch (err) {
            console.log(err);
        } finally {
            client.release
        }
    });
};

pool.on('error', function(err, client) {
    logger.error('idle client error', err.message, err.stack);
});

module.exports = {
    query: query,
get: get
};