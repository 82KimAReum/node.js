var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var http = require('http');

var fs = require('fs');
var querystring = require('querystring');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sequelize = new Sequelize('world', 'root', '1234', {
	dialect : 'mysql',
	host : 'localhost',
	port : 3306,
	operatorsAliases:Op,
	pool: {
	    max: 10,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	},
});
var Movie = sequelize.define('movie', {
	id : { type : Sequelize.INTEGER, primaryKey : true },
	title : { type : Sequelize.STRING, allowNull : false },
	director : { type : Sequelize.STRING, allowNull : false },
	year : { type : Sequelize.INTEGER, allowNull : true },
	synopsis : {type : Sequelize.STRING(2000), allowNull : true}
});

Movie.sync({force: true}).then(function (){
	console.log('Table create success');
},function(){
	console.log('Table create failure');
});



var contents = fs.readFileSync('./movieinfo.json', 'utf8');
var obj = JSON.parse(contents);
//var idx = obj[obj.length-1].id;   //마지막 영화의 ID
var idx = 0;

//title
var app = express();
//app.set('port', process.env.PORT || 80);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/movies', showMovieList);
//app.get('/movies/:id', showMovieDetail);
//app.post('/movies', addNewMovie);
//app.put('/movies/', movieUpdate);
//app.delete('/movies/:id', movieDelete);

//http.createServer(app).listen(app.get('port'), function(){
//    console.log("Running Web Server on port : " + app.get('port'));
//});

function showMovieList(req, res){
    
//    console.log(req.url);
//    var movieList = [];
//    for(var i = 0 ; i < obj.length ; i++){
//        var movie = obj[i];
//        
//        movieList.push({id: movie.id,
//             title : movie.title,
//             director:movie.director,
//             year : movie.year,
//            synopsis:movie.synopsis
//        });
//    }
    
	Movie.findOne({
//		where : {}
	}).then(function (results){
		console.log(results);
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(results));
	}, function (){
		console.log("Not Found");
	})	
	
}

	
	

function showMovieDetail(req, res){
    console.log(req.url);
    var id = req.url.split('/')[2];
    var movie = null;
//    for(var i = 0 ; i < obj.length ; i++){
//        var item = obj[i];
//        if(item.id == id){
//            movie = item;
//            break;
//        }
//    }
//    if(movie){  //찾았다면
//        res.writeHead(200, {'Content-Type':'application/json'});
//        res.end(JSON.stringify(movie));
//    }else{ //못찾았다면
//        res.writeHead(404, {'Content-Type':'application/json'});
//        var msg = {
//                error : {
//                    code : 404,
//                    message : "Movie Not Found"
//                }
//        };
//        res.end(JSON.stringify(msg));
//    }
    Movie.findOne({
		where : {id :id}
	}).then(function (results){
		console.log(results);
		 res.writeHead(200, {'Content-Type':'application/json'});
       res.end(JSON.stringify(results));
	}, function (){
		console.log("Not Found");
		res.writeHead(404, {'Content-Type':'application/json'});
	      var msg = {
	              error : {
	                  code : 404,
	                  message : "Movie Not Found"
	              }
	      };
	      res.end(JSON.stringify(msg));
	});

	
	

}
//
//function addNewMovie(req, res){
//    
//    req.setEncoding('utf8');
//    var buffer = '';
//    req.on('data', function(chunk){
//          buffer += chunk;
//    });
//    req.on('end', function(){
//        var data = querystring.parse(buffer).data;
//        var parsed = JSON.parse(data);
////        var newMovie = {
////            id : idx + 1,
////            title : parsed.title,
////            director : parsed.director,
////            year : parsed.year,
////            synopsis : parsed.synopsis
////        }
////        obj.push(newMovie);
////        fs.writeFileSync('./movieinfo.json', JSON.stringify(obj));
////        
////    	
//        Movie.create({
//        	id : idx + 1,
//            title : parsed.title,
//            director : parsed.director,
//            year : parsed.year,
//            synopsis : parsed.synopsis
//    	}).then(function (){
//    		console.log("Success");
//    		res.writeHead(200, {'Content-Type':'application/json'});
//    		res.end(JSON.stringify({"result" : "success"}));
//    	}, function (){
//    		console.log("Failure");
//    		res.writeHead(200, {'Content-Type':'application/json'});
//    		res.end (JSON.stringify({"result":"failure"}));
//    	});
//    });
//}
//function movieDelete(req,res){
//    if(req.url.split('/')[2]){
//        var id=req.url.split('/')[2];
////        var deleteIdx=null;
////        for(var i =0; i<obj.length; i++){
////            var item= obj[i];
////            if(item.id == id){
////                deleteIdx=i; break;
////            }
////        }
////        if(deleteIdx){//삭제하려는 idx찾았을 때
////            obj.splice(deleteIdx,1);
////            fs.writeFileSync('./movieinfo.json',JSON.stringify(obj));
////            res.writeHead(200,{'Content-Type':'application/json'});
////            res.end(JSON.stringify({"result":"success"}));
////        }else{
////            res.writeHead(404,{'Content-Type':'application/json'});
////            
////            res.end (JSON.stringify({"result":"failure"}));
////        }
//        Movie.destroy({
//        	where:{
//        		id=id
//        	}
//        }).then(function (){
//        	console.log('delete success');
//        	res.writeHead(200,{'Content-Type':'application/json'});
//          res.end(JSON.stringify({"result":"success"}));
//        }, function (){
//        	console.log("Not Found");
//        	res.writeHead(404,{'Content-Type':'application/json'});          
//        	res.end (JSON.stringify({"result":"failure"}));
//        });
//
//        
//        
//    }
//}
//function movieUpdate(req,res){
//    var buffer = '';
//    req.on('data', function(chunk){
//        buffer += chunk;
//    });
//    req.on('end', function(){
////        var movie = querystring.parse(buffer).data;
////        var parsed = JSON.parse(movie);
////        var data = {
////            id : parseInt(parsed.id),
////            title : parsed.title,
////            director : parsed.director,
////            year : parsed.year,
////            synopsis : parsed.synopsis
////        }
////        for(var i = 0 ; obj.length ; i++){
////            var item = obj[i];
////            if(item.id == parsed.id){
////                obj.splice(i, 1, data);
////                break;
////            }
////        }
////        fs.writeFileSync('./movieinfo.json', JSON.stringify(obj));
////        res.writeHead(200, {'Content-Type':'application/json'});
////        res.end(JSON.stringify({"result" : "success"}));
//    	
//
//    	
//    	
//    });
//}
module.exports = app;