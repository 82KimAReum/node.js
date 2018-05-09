//server.js
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
   if(request.url == '/'){
      response.writeHead(200, {'Content-Type' : 'text/html'});
      fs.createReadStream('./index.html').pipe(response);
      return;
   }else if(request.url == '/favicon.ico'){
      response.writeHead(200, {'Content-Type' : 'image/x-icon'});
      fs.createReadStream('./favicon.ico').pipe(response);
      return;
   }else if(request.url == '/images/jimin.jpg'){
      response.writeHead(200, {'Content-Type' : 'image/jpeg'});
      fs.createReadStream('./images/jimin.jpg').pipe(response);
      return;
   }else if(request.url == '/css/style.css'){
      response.writeHead(200, {'Content-Type' : 'text/css'});
      fs.createReadStream('./css/style.css').pipe(response);
      return;
   }
});

server.listen(80,function(){
    console.log('Starting...')
});