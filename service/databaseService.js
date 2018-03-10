const pg = require('pg');
const co = require('co');
const Pool = require('pg-pool');
const config = require('./config/config');

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