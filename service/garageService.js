const databaseService = require('./databaseService');

const getGarages = function () {
    databaseService.query("SELECT * FROM mymechanic.garage", [])
};

const insertGarage = function (newGarage) {
    databaseService.query("INSERT INTO mymechanic.garage (name, email, cep, born, cellphone, description) VALUES ($1, $2, $3, $4, $5, $6)",
     [
        newGarage.name,
        newGarage.email,
        newGarage.cep,
        newGarage.born,
        newGarage.cellphone,
        newGarage.description
     ]) 
};

module.exports = {
    insertGarage,
    getGarages
};