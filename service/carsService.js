const carsGateways = require('../gateways/carsGateway');


const getBrands = function (type) {
    return carsGateways.getBrands(type);
}

const getCars = function (type, brand) {
    return carsGateways.getCars(type, brand);
}

module.exports = {
    getBrands,
    getCars
}