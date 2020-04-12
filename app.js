var PORT = process.env.PORT || 80;
var express = require('express');
var app = express();
var index = require('./views/index.js');

app.use('/*', index);

app.listen(PORT);