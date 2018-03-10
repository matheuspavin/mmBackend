const databaseService = require('./databaseService');

const getGarages = function () {
    databaseService.query("SELECT * FROM mymechanic.garage", [])
};

const insertGarage = function () {

};

module.exports = {
    insertGarage,
    getGarages
};