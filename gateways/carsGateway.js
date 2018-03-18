const rest = require('../infra/rest');
const config = require('../config/config');

const getBrands = function (typeOfVehicle) {
    const request = {
        url: `${config.brands.url}${typeOfVehicle}/marcas`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        json: true
    };
    return rest(request);
};


module.exports = {
    getBrands
}