/*
 * error.js
 */
var express = require('express');
var app = express();

app.get('/:value', function(req, res){
	var value = parseInt(req.params.value);
	if(!value){
		res.writeHead(200, {'Content-Type':'text/plain;charset=utf8'});
		res.write("숫자가 아닙니다.");
		res.end();
	}
	res.send("Value : " + value);
})

app.listen(80);