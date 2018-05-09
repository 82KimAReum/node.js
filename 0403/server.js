var http=require('http');
var querystring =require('querystring');
var movieList=[{title:"Star Wras",director:'조지루카스'}];

var server=http.createServer(function(request,response){
    if(request.method.toLocaleLowerCase()=='post'){
        addMovieList(request,response);
    }else if(request.method.toLocaleLowerCase()=='get'){
        readMovieList(request,response);
    }
}).listen(80,function(){
    console.log('server running')
})

function readMovieList(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<!DOCTYPE html>")
    res.write("<html lang=\"en\">")
    res.write("<head>")
    res.write("<meta charset='UTF-8'>")
    res.write("<meta name=\"viewport\" content=\"width=device-width,                initial-scale=1.0\">")
    res.write( "<meta http-equiv=\"X-UA-Compatible\"                                content=\"ie=edge\">")
    res.write( "<title>Document</title>")
    res.write("</head>")
    res.write("<body>")
    res.write('<h2>좋아하는 영화목록</h2>');
    //console.log(movieList);
    res.write('<ul>')
    for (var i=0; i<movieList.length; i++){
        res.write('<li>'+movieList[i].title+'['+movieList[i].director+']'+'</li>');
    }
    res.write('</ul>');
    res.write("<form action='' method='post'>");
    res.write("<div>제목: <input type='text' name ='title'                          placeholder='영화 제목을 입력해 주세요.'></div> ");
    res.write("<div>제목: <input type='text' name ='director'                       placeholder='감독이름을 넣어 주세요.'></div> ");
    res.write("<input type='submit' value='전송'>")
    res.write("</body>")
    res.write("</html>")
    res.end();
}

function addMovieList(req,res){
    var body='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        //console.log(body);
        var parsed = querystring.parse(body);
        //console.log(parsed);//{ title: 'Transfomer', director: 'Michael bay' }
        movieList.push(parsed);
        res.statusCode=302;//redirect
        res.setHeader('Location','.');
        //사용자는 post방식의 페이지가 아닌 get 방식의 입력 결과 창으로 바뀜
        res.end();

    });
}