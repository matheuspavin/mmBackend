const router = require('express').Router();
const database = require('../util/database.js');
const garageService = require('../service/garageService');

router.get('/', async function (req, res, next) {
	const user = req.user;
	let result = await garageService.getGarages();
	console.log(result);
    return res.json(result);
});

router.post('/', function(req, res){
	var garage = req.body;
	banco.insertGarage(garage).then(function(result){
		result = result[0];
		var user = {};
		user.id_garage = result.id;
		user.password = garage.password;
		banco.insertUser(user).then(function(result){
			res.send(user);
		})
	})
});

module.exports = router;