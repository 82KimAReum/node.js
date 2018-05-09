var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
   //console.log(url.parse(request.url));
   var pathname = url.parse(request.url).pathname;
   if(pathname == '/') pathname = '/index.html';
   if(pathname.match(/^\//g)){
      fs.readFile(pathname.substring(1), function(err, data){
         if(err){
            console.log("Server Error");
            response.writeHead(200);
            response.write("Sorry^^.");
            response.end();
         }
         response.writeHead(200, {'Content-Type' : 'text/html'});
         response.write(data);
         response.end();
      }) 
   }else{
      console.log("Not Found");
      response.writeHead(404);
      response.end();
   }
});

server.listen(8888, function(){
   console.log("I'm ready...");
});
