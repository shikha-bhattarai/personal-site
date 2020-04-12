var PORT = process.env.PORT || 80;
var express = require('express');
var app = express();
var index = require('./routes/index.js');
var http = require ('http');
var server = http.Server(app);

app.use('/*', index);

server.listen(PORT, function(){
    console.log("Application is running");
});