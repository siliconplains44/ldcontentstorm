/// <reference path="definitions/node.d.ts"/>
/// <reference path="definitions/express.d.ts"/>

import * as express from "express";
import * as path from "path";
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

import * as config from "./config";

var nodeMariaDb = require('mysql');

var spa = require('./routes/main');
var ajaj = require('./routes/ajaj');

require('http').globalAgent.maxSockets = Infinity;
require('https').globalAgent.maxSockets = Infinity;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '10000mb'}));
app.use(bodyParser.urlencoded({limit: '10000mb', extended: true}));
app.use(bodyParser.json());

app.set('view options', {
  layout: false
});

var configuration = new config.Config;

export var serviceConnectionPool = nodeMariaDb.createPool({
  connectionLimit : configuration.connectionpoolconnectioncount,
  host : configuration.databasehost,
  port : configuration.databaseport,
  user : configuration.databaseusername,
  password : configuration.databasepassword,
  database : configuration.database/*,
   ssl : {
   ca : fs.readFileSync(config.cert)
   }*/
});

app.get('/*', spa.allroutes);

ajaj.loadRoutes(app, ajaj);

// catch 404 and forward to error handler
app.use(function(req, res:any, next) {
  var err = new Error('Not Found');
  res.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err:any, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res:any, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
