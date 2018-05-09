//server4.js
var http=require('http'),
    connect=require('connect'),
    serveStatic=require('serve-static'),
    morgan=require('morgan'),
    fs=require('fs'),
    path=require('path');

var app = connect();
//log파일로 내보내기 
var accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), {flags: 'a'});
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

// app.use(morgan("tiny"));

app.use(serveStatic(__dirname,{'index':['index.html']}));

http.createServer(app).listen(80,function(){
    console.log('run');
})