//http.js
var http =require('http');
var url=require('url');

var server=http.createServer(function(request,response){
    if(request.url != '/favicon.ico'){
        //console.log(url.parse(request.url,true));//사용자가 리쿼스트한 url get
        var query=url.parse(request.url,true)['query'];
        console.log('Nmae: %s ,Age: %s',
        decodeURI(query.username),query.userage);
       // console.log(url);
       // console.loge(request.method);
}
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<body>');
    response.write('<h1>hello , localhost</h1>');
    response.write('</body>');
    response.end('<div>end</div>');//보내고 닫음 
});
server.listen(80,function(){
    console.log('I am ready at localhost:80');
});
// C:\NodeJSHome\0330>node http.js
// I am ready at localhost:80
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?username=%ED%95%9C%EC%A7%80%EB%AF%BC&userage=24',
//   query: { username: '한지민', userage: '24' },
//   pathname: '/0330/input.html/register',
//   path: '/0330/input.html/register?username=%ED%95%9C%EC%A7%80%EB%AF%BC&userage=24',
//   href: '/0330/input.html/register?username=%ED%95%9C%EC%A7%80%EB%AF%BC&userage=24' }

//http://localhost/0330/input.html/register?username=%ED%95%9C%EC%A7%80%EB%AF%BC&userage=24

// C:\NodeJSHome\0330>node http.js
// I am ready at localhost:80
// Nmae: 한지민 ,Age: 24
