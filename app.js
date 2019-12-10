var express = require('express');

var app = express();

var port = process.env.PORT || 4700;

app.arguments('/resources', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);