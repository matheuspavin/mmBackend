const router = require('express').Router();
const garageService = require('../service/carsService');

router.get('/brands', async function (req, res, next) {
	const user = req.user;
	let result = await carsService.getBrands();
    return res.json(result);
});