var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var start = express();

var api = require('./routingAPI/routeLogic');

start.use(bodyParser.json());
start.use(bodyParser.urlencoded({ extended: true }));

start.use(express.static(path.join(__dirname, '/../Client/dist')));

start.use('/api', api);

start.get('/*', function(req, res, next) {
  res.status(200).sendFile(path.join(__dirname + '/../Client/dist/index.html')); 
});

start.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var http = require('http');
var config = require('./config.js');

var port = config.expressPort;
start.set('port', port);

var server = http.createServer(start);

server.listen(port);