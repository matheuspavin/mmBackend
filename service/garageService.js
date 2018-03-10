const databaseService = require('./databaseService');

const getGarages = function () {
    databaseService.query("SELECT * FROM mymechanic.garage", [])
};


module.exports = {
    getGarages
};