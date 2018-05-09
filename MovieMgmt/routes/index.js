var express = require('express');
var router = express.Router();
var model=require('../models/movie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome CGV Theater' });
});

router.get('/movies',movieAll);
router.get('/movies/:id',movieOne);
router.post('/movies',addMovies);
router.delete('/movies/:id',deleteMovie);
router.put('/movies',updateMovie);
module.exports = router;

function updateMovie(req,res){
	//console.log(req.body);
	//{ data: '{"id":"2","title":"신과함께","director":"누군가","year":"2000","synopsis":"신과 함께합니다"}' }
	var parsed=JSON.parse(req.body.data);
	model.update({
		title:parsed.title,
		director:parsed.director,
		year:parsed.year,
		synopsis:parsed.synopsis
	},{
		where:{id:parsed.id}
	}).then(function(){
		res.writeHead(200,{'Content-Type':'application/json;charset=utf8'})
		res.end(JSON.stringify({"result" : "success"}));
	});
	
}

function deleteMovie(req,res){
	model.destroy({where:{id:req.params.id}}).then(function(){
		res.writeHead(200,{'Content-Type':'application/json;charset=utf8'})
		res.end(JSON.stringify({"result" : "success"}));
	},function(){
		console.log('Delete failure')
	})
}

function movieAll(req, res){
	var array = [];
	model.findAll({attribute:['id', 'title','director','year']}).then(function(results){
		for(var i = 0 ; i < results.length ; i++){
			var movie = results[i];
			array.push({id:movie.id, title:movie.title, director:movie.director, year:movie.year});
		}
		var obj = {
			count : results.length,
			movielist : array
		};
		res.writeHead(200, {'Content-Type':'application/json;charset=utf8'});
		res.end(JSON.stringify(obj));
	}, function(){
		console.log('Not Found');
	});
}

function movieOne(req,res){
	model.findOne({
		where:{id:req.params.id}
	}).then(function(results){
		//console.log(results);
		res.writeHead(200,{'Content-Type':'application/json;charset=utf8'})
		res.end(JSON.stringify(results));
	},function(){console.log('not found');})
}

function addMovies(req,res){
	var parsed=JSON.parse(req.body.data);
	//{ data: '{"title":"리틀","director":"하이","year":"231","synopsis":"시골"}' }
	console.log(parsed.title);//insert
	model.create({
		title : parsed.title,
		director : parsed.director,
		year : parseInt(parsed.year),
		synopsis : parsed.synopsis
	}).then(function(){
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify({"result" : "success"}));
	});
}