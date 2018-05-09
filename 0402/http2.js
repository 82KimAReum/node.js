var http =require('http');
var fs= require('fs');
var url= require('url');

var server=http.createServer(function(request,response){
    if(request.url !='/favicon.ico'){
        var pathname = url.parse(request.url,true).pathname;
        if(pathname =='/')pathname='/index.html';
        if(pathname.match(/\//g)){
            if(pathname=='/register'){
                response.writeHead(200);
                    response.write(JSON.stringify(url.parse(request.url,true).query));
                    response.end();
            }
            fs.readFile(pathname.substring(1),'utf8',function(err,data){
                if(err){
                    console.log('error');
                    response.writeHead(200);
                    response.write('sorry');
                    response.end();
                }
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data);
                response.end();
            })
        }
    }
});
server.listen(8888);