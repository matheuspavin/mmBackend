const router = require('express').Router();
const database = require('../util/database.js');

router.get('/garage', function (req, res, next) {
    const user = req.user;
    database.query("select * from mymechanic.garage", []).then(function (garages) {
        res.json(garages);
    });
});

app.post('/garage', function(req, res){
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