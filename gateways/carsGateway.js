const rest = require('../infra/rest');
const config = require('../config/config');

const getBrands = function () {
    const request = {
        url: `${config.cars.url}`,
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