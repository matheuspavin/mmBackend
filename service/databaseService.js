const pg = require('pg');
const co = require('co');
const Pool = require('pg-pool');
const config = require('./config/config');

const poolConfig = {
    user: config.database.user,
    database: config.database.database,
    password: config.database.password,
    host: config.database.host,
    port: config.database.port,
    max: config.database.max,
    idleTimeoutMillis: config.database.idleTimeoutMillis
};

const pool = new Pool(poolConfig);

const get = async function (sql, params) {
    const rows = await query(sql, params);
    return rows[0];
};

const query = function(sql, params) {
    console.log(sql);
    (async (resolve, reject) => {
        const client = await pool.connect();
        try {
          const res = await client.query(sql, params);
          console.log(res);
          return res;
        } catch (err) {
            console.log(err);
        } finally {
            client.release
        }
    });
};

module.exports = {
    query: query,
get: get
};