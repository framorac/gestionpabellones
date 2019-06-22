var express = require('express');
var router = express.Router();

/* GET Todos los pacientes. */
router.get('/listar', function(req, res, next) {
	let sql = 'SELECT * from paciente';
	connection.query(sql, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

/* GET Paciente por Id. */
router.get('/listar/id/:id', function(req, res, next) {
	let sql = "SELECT * from paciente WHERE id=" + req.params.id;
	connection.query(sql, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

/* POST Agregar nuevo Paciente. */
router.post('/agregar', function(req, res, next) {
	let data = {
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		telefono: req.body.telefono,
		email: req.body.email,
		direccion: req.body.direccion,
		comuna: req.body.comuna,
		run: req.body.run
	}

	let sql = "INSERT INTO paciente SET ?";
	connection.query(sql, data, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

/* DELETE Paciente por Id. */
router.delete('/eliminar/id/:id', function(req, res, next) {
	let sql = "DELETE FROM paciente WHERE id=" + req.params.id;
	connection.query(sql, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

/* PUT Actualizar nuevo Paciente. */
router.put('/actualizar/id/:id', function(req, res, next) {
	let data = {
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		telefono: req.body.telefono,
		email: req.body.email,
		direccion: req.body.direccion,
		comuna: req.body.comuna,
		run: req.body.run
	}

	let sql = "UPDATE paciente SET ? WHERE id=" + req.params.id;
	connection.query(sql, data, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

module.exports = router;
