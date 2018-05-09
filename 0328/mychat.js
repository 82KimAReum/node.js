//mychat.js
var net =require('net');// net.js , net.json, net.node :모듈의 확장자들
var arr=[];
var server=net.createServer(function(socket){
    arr.push(socket);
    process.stdin.setEncoding('utf8');
    process.stdin.resume();
    process.stdin.on('data',function(chunk){
        socket.write(chunk);
    });

    socket.on('data',function(data){
        for(var i =0; i<arr.length; i++){
           // if(socket != arr[i]){
                arr[i].write('[' + socket.remoteAddress + ']' + data.toString('utf8'));
            //}
            console.log("from client>> "+data.toString('utf8'));
        }
    });
    socket.on('end',function(){
        // for(var i =0; i<arr.length; i++){
        //    arr[i].write("i' close.");
        // }      
        arr.splice(arr.indexOf(socket),1);
    });
    socket.on('error',function(err){
        if(err){return;}
    });
});
server.listen(8888,function(){
    console.log('i am ready at 8888');
})
