//netserver.js

var net=require('net');

var server = net.createServer(function(socket){
    console.log('connected....');

    console.log("From : (%s %d)",socket.remoteAddress, socket.remotePort);
 
    socket.on('close',function(){
        console.log('client closed....');

    });
    socket.on('error',function(err){
        console.log(err);
    });
    socket.on('data',function(buffer){
        socket.write(buffer.toString('utf8'));//사용자에게 다시 발송
    });
    socket.write('hello!!!!\n\n');
});


server.listen(8888,function(){
    console.log("im ready at port 8888");
});
