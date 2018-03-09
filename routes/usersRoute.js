const jwt = require('jsonwebtoken');
const router = require('express').Router();
const connectDataBase = require("../connectDataBase.js");
const co = require('co');
const sessionService = require('../service/sessionService.js');
const userService = require('../service/userService');

router.get('/', async function(req, res){
	let result = await userService.listClient();
		res.send(result) ;
});

router.post('/', function(req, res){
	const newPessoa = req.body;
	let result = await userService.insertPerson(newPerson);
	res.send(result);
});

router.post('/deletdelete', function(req, res){
	const delPessoa = req.body;
	connectDataBase.deletePerson(delPessoa).then(function(resultado){
		res.send(resultado) ;
	})
});

module.exports = router;