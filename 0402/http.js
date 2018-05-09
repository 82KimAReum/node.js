var http=require('http');
var fs= require('fs');
var server =http.createServer(function(request,response){
    //console.log(request.method);
    //console.log(request.url);
    if(request.url=='/'){
        // console.log(request.url);
        
        // response.writeHead(200,{'Content-Type':'text/html'});//정상
        // response.write('hello,world');
        fs.readFile('./index12.html',function(err,data){
            if(err){
                console.log('server Error');
                response.writeHead(200);
                response.write('Sorry^^');
                response.end();
            }
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end()
        })
        
    }else{
        console.log('not found');
        response.write('not found');
        response.writeHead(404);
        response.end();
    }
   
});
server.listen(8888,function(){
    console.log("I'm ready...");
})
// C:\NodeJSHome\0402>node http.js
// I'm ready...
// GET //내가 만든 파일과 
// GET //favicon.ico 호출이라서 2 번 찍힘
