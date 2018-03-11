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

// TODO - Refatorar  e fazer upgrade do PG - https://node-postgres.com/guides/upgrading
const query = function (sql, params) {
    return new Promise(function (resolve, reject) {
        pool.connect(function (err, client, done) {
            if (err) {
                logger.info(err);
            }
            const handledSql = handleInCondition(sql, params);
            const query = client.query(handledSql, params);
            const rows = [];
            query.on('error', function (e) {
                done();
                logger.info(sql + ' -> ' + params);
                logger.info(e);
                reject(e);
            });
            query.on('row', function (row) {
                rows.push(convertObjectToCamelCase(row));
            });
            query.on('end', function (result) {
                done();
                resolve(rows);
            });
        });
    });
};

const toCamelCase = function (text) {
    if (!text) return text;
    return text.split("_").map(function (word, index) {
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join("");
};

const convertObjectToCamelCase = function (obj) {
    const keysToBeModified = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key.indexOf("_") > -1) keysToBeModified.push(key);
        }
    }
    keysToBeModified.forEach(function (key) {
        obj[toCamelCase(key)] = obj[key];
        delete obj[key];
    });

    for (let key in obj){
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] && Object.keys(obj[key]).length > 0) {
            obj[key] = convertObjectToCamelCase(obj[key]);
        }
    }
    return obj;
};

module.exports = {
    query: query,
    get: get
};