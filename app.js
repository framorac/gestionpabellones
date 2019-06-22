var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");

var indexRouter = require('./routes/index');
var pacientesRouter = require('./routes/pacientes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//MYSQL
app.use(function(req, res, next){
	global.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'adminbd',
		database : 'pabellones'
	});
	connection.connect();
	next();
});

app.use('/', indexRouter);
app.use('/api/v1/pacientes', pacientesRouter);


module.exports = app;
