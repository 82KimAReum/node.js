//server1.js
var connect=require('connect');
var http=require('http');
var app = connect();

app.use(function(req,res,next){
        console.log("%s, %s", req.method,req.url);
        next();
});

app.use(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>hello</h1>');
});

http.createServer(app).listen(80,function(){
    console.log('run');
})