const jwt = require('jsonwebtoken');
const router = require('express').Router();
const co = require('co');
const sessionService = require('../service/sessionService.js');

router.get('/consultaCliente', function(req, res){
	banco.listCliente().then(function(resultado){
		res.send(resultado) ;
	})
});

router.post('/adicionaPessoa', function(req, res){
	const newPessoa = req.body;
	banco.insertPessoa(newPessoa).then(function(resultado){
		res.send(resultado) ;
	})
});

router.post('/deletaPessoa', function(req, res){
	const delPessoa = req.body;
	banco.deletaPessoa(delPessoa).then(function(resultado){
		res.send(resultado) ;
	})
});

module.exports = router;