const jwt = require('jsonwebtoken');
const router = require('express').Router();
const connectDataBase = require("../connectDataBase.js");
const co = require('co');
const sessionService = require('../service/sessionService.js');

router.get('/consultaCliente', function(req, res){
	connectDataBase.listCliente().then(function(resultado){
		res.send(resultado) ;
	})
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