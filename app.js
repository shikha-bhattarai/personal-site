var PORT = process.env.PORT || 8084;
var express = require('express');
var app = express();
var index = require('./routes/index.js');
var http = require ('http');
var server = http.Server(app);

app.use('/', index);

app.use('/assets', express.static('assets'));

server.listen(PORT, function(){
    console.log("Application is running");
});