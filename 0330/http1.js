var http= require('http');
var server = http.createServer(mylistener);
server.on('request',function(request,response){
    console.log(request);//사용자가 들어오면 정보를 보여줌
});
server.on('connection',function(socket){
    console.log('connection');
});
server.on('close',function(socket){
    console.log('closed...');
})
function mylistener(request,response){
    response.write('<h1>hi</h1>');
    response.end();
}
server.listen(9999);