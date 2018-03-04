const jwt = require('jsonwebtoken');
const router = require('express').Router();
const co = require('co');
const sessionService = require('../service/sessionService.js');

app.post('/customer', function(req, res){
	var customer = req.body;
	banco.insertCustomer(customer).then(function(result){
		result = result[0];
		var user = {};
		user.id_customer = result.id;
		user.password = customer.password;
		banco.insertUser(user).then(function(result){
			res.send(user);
		})
	})
});

module.exports = router;