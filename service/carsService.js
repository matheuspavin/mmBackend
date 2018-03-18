const carsGateways = require('../gateways/carsGateway');


const getBrands = function (type) {
    return carsGateways.getBrands(type);
}

module.exports = {
    getBrands
}