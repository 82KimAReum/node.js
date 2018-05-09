/*
 * Routing
 * 1)요청 경로  app.use('/movies') or app.use('/')
 * 2)요청 메소드  app.get(), app.post()
 * 3)요청 경로 + 요청 메소드  app.get('/movies')  app.get('/movies:id')
 */
/*
 * app.get('/', function(req, res){});
 * app.post('/login', function(req, res){});
 * 4)동적 파라미터 
 *    /movies/:id      -->   /movies/1 or /movies/2
 * 5)동적 파라미터 사용시 주의사항
 *   -동적 파라미터 사용할 때 설정 순서가 겹처지는 경우 동작하지 않을 수 있다.
 *   -
 * 6)동적 파라미터에 정규식 사용하기
 *   ?, *, +
 *   app.get('/ab?cd'...
 *   app.get('/ab+cd'...
 *   app.get('/ab*cd'...
 *   app.get('/ab(cd)?e...
 * 
 * 7)하나의 경로에 메소드별로 라우팅 로직을 묶을 수 있다.
 */
var express = require('express');
var app = express();
app.set('port', 80);

/*app.get('/movies/:movieid', function(req, res){
	var movieid = req.params.movieid;
	res.send('movieid = ' + movieid);
});
app.get('/movies/:actor', function(req, res){
	var movieid = req.params.movieid;
	res.send('movieid = ' + movieid);
});
app.get('/movies/:movieid/:actor', function(req, res){
	var movieid = req.params.movieid;
	var actor = req.params['actor'];
	res.send('id = ' + movieid + ', actor = ' + actor);
});*/

/*app.get('/user/sample', function(req, res){
	res.send('GET /user/sample');
});
app.get('/user/:sample', function(req, res){
	res.send('GET /user/:sample');
});
*/

/*app.get('/ab(cd)?e', function(req, res){
	res.send(req.url);
})
*/

app.route('/movies')
	.get(function(req, res){
		console.log("GET " + req.url);
	})
	.post(function(req, res){
		console.log("POST " + req.url);
	})
	.put(function(req, res){
		console.log("PUT " + req.url);
	})
	.delete(function(req, res){
		console.log("DELETE " + req.url);
	})

app.listen(app.get('port'), function(){
	console.log("Running server on 80");
});