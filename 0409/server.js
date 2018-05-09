/**
 * express 역할 :정적파일 처리, 라우트(모르간), 라우팅(get, put...해서 경로 본건)
 * 1.정적파일: express.static(경로)
 * 2.Route(라우팅에 경로를 추가)
 * -라우트하는 순서가 중요
 * - Node.js는 client로 부터 request가 들어올때 routing table을 참한다.
 * 3. middleware동작 순서
	 * 	-favicon
	 * 	-logging
	 * 	-static files
	 * 	-service middlewares (npm install)
 * 4.cookie-parser
 * 5.express.static(정적 파일 처리)
 * 6.body-parser
 * 
 * 
 */
var express =require('express');
var app=express();

app.use(function(req,res,next){
	var now= new Date();
	console.log(now.toString() + ',url = ' +req.url);
	next();
});
app.use(function(req,res){
	res.send('<h1>hello Express</h1>');
});
app.listen(80);