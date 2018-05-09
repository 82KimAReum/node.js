var net=require('net');

var server = net.createServer(function(socket){
    console.log('connected....');
    //console.log(socket);
    console.log("Client Address: :"+socket.remoteAddress);
    console.log("Client Port: :"+socket.remotePort);
    socket.on('close',function(){
        console.log('client closed....');

    })
    socket.write('hello!!!!\n\n');
});


server.listen(8888,function(){
    console.log("im ready at port 8888");
});
