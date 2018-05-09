var http=require('http'),
    proxy = require('http-proxy');


proxy.createProxyServer({target:'http://localhost:9000'}).listen(8888);
 // 80번으로 들어왔는데 8000번으로 점프
 
// 
// Create your target server 
// 
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' 
                + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000,function(){
    console.log("running web server on port 8888")
});

//http://localhost:8888/
//http://localhost:9000/
//포트번호 8888, 9000둘다 가능
//보안 목적으로 사용 