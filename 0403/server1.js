//multipart post
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(request,response){
    if(request.method.toLocaleLowerCase()=='get'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('./demo.html').pipe(response);
        return;
    }else if(request.method.toLocaleLowerCase()=='post'){
        var body = '';
        request.on('data',function(chunk){
            body +=chunk.toString();

        });
        request.on('end',function(){
           
            var conType = request.headers['content-type'];
           //console.log(conType); //multipart/form-data; boundary=----WebKitFormBoundaryqOCChZDAAmmfdo1b
            var boundary = conType.split(';')[1].split('=')[1];
            //console.log(boundary);
            //----WebKitFormBoundaryAlwpm9n54Bbhdr2u
            var arr= body.split(boundary);
            console.log(arr[1]);
            //arr[1] :Content-Disposition: form-data; name="username" sujan//username
            console.log(arr[2]);
            //arr[2]: Content-Disposition: form-data; name="userage" 5 //userage
            //console.log(arr[3]);
       
            response.end();
        });
    }
}).listen(80,function(){
    console.log('Starting...!');
})


// [nodemon] starting `node server1.js`
// Starting...!
// size: 85042
// length: 30
// [nodemon] restarting due to changes...
// [nodemon] starting `node server1.js`
// Starting...!
// size: 85041
// length: 309