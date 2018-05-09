/**
 * app1.js
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./router1'));

app.listen(80, function(){
	console.log("Running");
});