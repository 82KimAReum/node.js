//netclient.js
var net =require('net');

var socket = new net.Socket;

socket.setEncoding('utf8');
//socket.connect(port[, host][, connectListener])
socket.connect(8888, 'localhost' ,function(){
    console.log("Just now connected to server...");
    socket.write('밥먹을 시간이야!!1');

} );

process.stdin.setEncoding('utf8');
process.stdin.resume();
//기본적을 stdin은 닫혀있어 사용전에 resume해야 함
process.stdin.on('data',function(chunk){
    socket.write(chunk);
});

socket.on('data',function(data){
    //서버가 보내주는 data
    console.log('from server: '+data);
});

socket.on('close',function(){
    console.log('closing......');
})