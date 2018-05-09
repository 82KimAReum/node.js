//server1.js
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
   if(request.url == '/input1.html'){
      response.writeHead(200, {'Content-Type':'text/html'});
      fs.createReadStream('./input1.html').pipe(response);
      return;
   }else if(request.url.match(/^\/demo/g)){
      var obj = url.parse(request.url, true).query;
      var first = parseInt(obj['first']);
      var second = parseInt(obj.second);
      if(!first || !second){
         response.statusCode = 404;
         response.end("Invalid Parameter");
      }else{
         response.statusCode = 200;
         response.end(first + ' + ' + second + ' = ' + (first + second));
      }
   }
}).listen(80);
//localhost:80/input1.html
//localhost/demo?first=5&second=9