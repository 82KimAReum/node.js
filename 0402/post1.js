//post1.js
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(request,response){
    if(request.method.toLocaleLowerCase()=='post'){
        inputPage(request,response);
    }else if(request.method.toLocaleLowerCase()=='get'){
        readPage(request,response);
    }
}).listen(80);
//http://localhost/input2.html
function inputPage(req,res){//post
    var body ='';
    req.on('data',function(chunk){
        console.log("%d bytes received",chunk.length);
        body +=chunk;
    });
    req.on('end',function(){
        console.log('data end');
        console.log('data: ',body);
    })
}
function readPage(req,res){//get
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream('./input2.html').pipe(res);
    return;
}