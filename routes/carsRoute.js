const router = require('express').Router();
const carsService = require('../service/carsService');

router.get('/brands', async function (req, res, next) {
    const type = req.query.type;
    let result = await carsService.getBrands(type);
    return res.json(result);
});


module.exports = router;
