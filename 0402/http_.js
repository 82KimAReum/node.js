var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
   if(request.url == '/'){
      fs.readFile('./indexs.html', function(err, data){
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
