const jwt = require('jsonwebtoken');
const router = require('express').Router();
const connectDataBase = require("../connectDataBase.js");
const co = require('co');
const sessionService = require('../service/sessionService.js');
const userService = require('../service/userService');

router.get('/consultaCliente', async function(req, res){
	let result = await userService.listClient();
		res.send(result) ;
});

router.post('/adicionaPessoa', function(req, res){
	const newPessoa = req.body;
	connectDataBase.insertPessoa(newPessoa).then(function(resultado){
		res.send(resultado) ;
	})
});

router.post('/deletaPessoa', function(req, res){
	const delPessoa = req.body;
	connectDataBase.deletaPessoa(delPessoa).then(function(resultado){
		res.send(resultado) ;
	})
});

module.exports = router;