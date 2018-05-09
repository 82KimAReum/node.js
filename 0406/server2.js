var http = require('http');
var express = require('express');
var fs = require('fs');
var querystring = require('querystring');

var contents = fs.readFileSync('./movieinfo.json', 'utf8');
var obj = JSON.parse(contents);
var idx = obj[obj.length-1].id;   //마지막 영화의 ID


var app = express();
app.set('port', process.env.PORT || 80);

app.use(express.static(__dirname, {'index' : 'index.html'}));

app.get('/movies', showMovieList);
app.get('/movies/:id', showMovieDetail);
app.post('/movies', addNewMovie);
app.put('/movies/', movieUpdate);
app.delete('/movies/:id', movieDelete);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Running Web Server on port : " + app.get('port'));
});

function showMovieList(req, res){
    //console.log(req.url);
    var movieList = [];
    for(var i = 0 ; i < obj.length ; i++){
        var movie = obj[i];
        movieList.push({id: movie.id, title : movie.title});
    }
    res.writeHead(200, {'Content-Type':'application/json'});
    var movieObj = {
        count : movieList.length,
        movies : movieList
    }
    res.end(JSON.stringify(movieObj));
}

function showMovieDetail(req, res){
    console.log(req.url);
    var id = req.url.split('/')[2];
    var movie = null;
    for(var i = 0 ; i < obj.length ; i++){
        var item = obj[i];
        if(item.id == id){
            movie = item;
            break;
        }
    }
    if(movie){  //찾았다면
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(movie));
    }else{ //못찾았다면
        res.writeHead(404, {'Content-Type':'application/json'});
        var msg = {
                error : {
                    code : 404,
                    message : "Movie Not Found"
                }
        };
        res.end(JSON.stringify(msg));
    }
}

function addNewMovie(req, res){
    // req.setEncoding('utf8');
    // var buffer = '';
    // req.on('data', function(chunk){
    //       buffer += chunk;
    // });
    // req.on('end', function(){
    //     //console.log(buffer);//data=data=%7B%22title%22%3A%22title%22%2C%22director%22%3......
    //     //console.log(querystring.parse(buffer));
    //     //{ data: '{"title":"아아","director":"아아아","year":"2018","synopsis":"ㅁㄴㅇㅎㅁㅇㄶ"}' }
    //     var data=querystring.parse(buffer).data;
    //     var parsed=JSON.parse(data);

    //     //var parsed = JSON.parse(buffer);
    //     var newMovie = {
    //         id : idx + 1,
    //         title : parsed.title,
    //         director : parsed.director,
    //         year : parsed.year,
    //         synopsis : parsed.synopsis
    //     }
    //     obj.push(newMovie);
    //     fs.writeFileSync('./movieinfo.json', JSON.stringify(obj));
    //     res.writeHead(200, {'Content-Type':'application/json'});
    //     res.end(JSON.stringify({"result" : "success"}));
    // });
    req.setEncoding('utf8');
    var buffer = '';
    req.on('data', function(chunk){
          buffer += chunk;
    });
    req.on('end', function(){
        var data = querystring.parse(buffer).data;
        var parsed = JSON.parse(data);
        var newMovie = {
            id : idx + 1,
            title : parsed.title,
            director : parsed.director,
            year : parsed.year,
            synopsis : parsed.synopsis
        }
        obj.push(newMovie);
        fs.writeFileSync('./movieinfo.json', JSON.stringify(obj));
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({"result" : "success"}));
    });
}
function movieDelete(req,res){
    if(req.url.split('/')[2]){
        var id=req.url.split('/')[2];
        var deleteIdx=null;
        for(var i =0; i<obj.length; i++){
            var item= obj[i];
            if(item.id == id){
                deleteIdx=i; break;
            }
        }
        if(deleteIdx){//삭제하려는 idx찾았을 때
            obj.splice(deleteIdx,1);
            fs.writeFileSync('./movieinfo.json',JSON.stringify(obj));
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({"result":"success"}));
        }else{
            res.writeHead(404,{'Content-Type':'application/json'});
            
            res.end (JSON.stringify({"result":"failure"}));
        }
    }
}
function movieUpdate(req,res){
    var buffer = '';
    req.on('data', function(chunk){
        buffer += chunk;
    });
    req.on('end', function(){
        var movie = querystring.parse(buffer).data;
        var parsed = JSON.parse(movie);
        var data = {
            id : parseInt(parsed.id),
            title : parsed.title,
            director : parsed.director,
            year : parsed.year,
            synopsis : parsed.synopsis
        }
        for(var i = 0 ; obj.length ; i++){
            var item = obj[i];
            if(item.id == parsed.id){
                obj.splice(i, 1, data);
                break;
            }
        }
        fs.writeFileSync('./movieinfo.json', JSON.stringify(obj));
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({"result" : "success"}));
    });
}