var http=require('http'),
    connect =require('connect'),
    serveStatic=require('serve-static');
var app =connect();

app.use(serveStatic(__dirname,{//C:\NodeJSHome\0405
    //정적 페이지 처리
    'index':['index.html','index.htm']
}))
http.createServer(app).listen(80,function(){
    console.log('Run');
   
});