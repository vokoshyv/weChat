// Node requirements
var express = require('express');
var app = express();
var server = require('http').Server(app);

// Handlebar requirement
var engines = require('consolidate');

// Handlebars Engine Setup
app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Socket Connection
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('blshigralbgkjarg');
  socket.on('chat', function(msg){
    console.log('message: ' + msg);
  });
});

// Middleware requirement
require('./config/middleware.js')(app, express);

// Export the server
module.exports = server;