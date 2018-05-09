var http=require('http'),
    connect=require('connect'),
    serveStatic=require('serve-static'),
    morgan=require('morgan');

var app = connect();

app.use(morgan("combined"));
// ::1 - - [05/Apr/2018:04:15:11 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
app.use(serveStatic(__dirname,{'index':['index.html']}));

http.createServer(app).listen(80,function(){
    console.log('run');
})