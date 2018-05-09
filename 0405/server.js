var connect=require('connect');
//var http=require('http');
var app = connect();

function logger(req,res,next){
   
    console.log("%s, %s ",req.method,req.url);
     next();//다음 함수 호출
}
function hello(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>hello0</h1>');
}

app
    .use(logger)
    .use(hello)
    .listen(80);