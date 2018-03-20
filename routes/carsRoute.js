const router = require('express').Router();
const carsService = require('../service/carsService');

router.get('/brands', async function (req, res, next) {
    const type = req.query.type;
    const result = await carsService.getBrands(type);
    return res.json(result);
});

router.get('/cars', async function (req, res, next) {
    const type = req.query.type;
    const brand = req.query.brand;
    const result = await carsService.getCars(type, brand);
    return res.json(result);
});



module.exports = router;
