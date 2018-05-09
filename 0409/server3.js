/**
 * express.static() : 정적파일 처리를 위한 middleware
 */
var express = require('express');

var app = express();

app.use("/movies", express.static(__dirname));
// /static이라고 치면 __dirname밑의 모든 정적 페이지를 뿌려줌
app.get("/", function(req, res){
	//console.log("__dirname = " + __dirname);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write("<h1>Hello, Express</h1>");
	res.end();
});

app.listen(80, function(){
	console.log("Running server on 80.");
});