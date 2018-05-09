//routing
//1)요청 경로 app.use('./movies') or app.user('/')
//2)요청 메소드 app.get(), app.post()
//3)요청 경로 +요청 메소드 app.get('/movies') app.get('/movies:id')
/*
 * app.get('/',fuction(req,res){{);
 * app.post('/login',function(req,res){});
 * 4)동적 파라미터
 *  /movies/:id -->/movies/1 or /movies/2
 *  
 */
var express = require('express');
var app = express();
app.set('port', 80);


app.listen(app.get('port'), function(){
	console.log("Running server on 80");
});