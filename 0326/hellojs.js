var http =require('http');
http.createServer(function(request, response){
  response.writeHead (200,{'Content-Type':'text/html'}) ;
  response.write("<h1 style='color:blue; font-weight:900'>");
  response.write('hello,world</h1>');
  response.end();
}).listen(80,function(){
    console.log('Server running at http://localhost');
})