/**
 * bodyparserdemo.js
 */
var express = require('express');
//var querystring = require('querystring');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.post("/", function(req, res){
//	var buffer = '';
//	req.on('data', function(chunk){
//		buffer += chunk;
//	});
//	req.on('end', function(){
//		var parsed = querystring.parse(buffer);
//		res.send('title = ' + parsed.title + ', director = ' + parsed.director);
//	});
	//console.log(req.body);
	res.send('title:'+req.body.title+',director = '+req.body.director)
});

//postman의 body -x-www.form-urlencoded

app.listen(80, function(){
	console.log("Running");
});