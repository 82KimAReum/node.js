//post.js
//body에 내용이 들어 있음 url이 깨끗
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(request,response){
    if(request.url=='/input2.html'){
        response.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream('./input2.html').pipe(response);
        return;
    }
    var body ='';
    request.on('data',function(chunk){//data들어 오는 중
         //사용자가 submit버튼을 누르면 chunk로 값이 들어옴
        body+=chunk;//first=7&second=4 
    });
    request.on('end',function(){//data끝남
        console.log('data end');
        console.log(body);
    });
}).listen(80);
//http://localhost/input2.html
