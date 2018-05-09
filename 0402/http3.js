//정적파일 처리하기
//미리 작성된 HTML, 이미지, 동영상,사운드 같이 서버의 별도의 동작없이 
//렌더링되는 파일
//fs모듈 필요
//http://localhost:8888/index.html
//http://localhost:8888/images/jimin.jpg
//http://localhost:8888/audios/abc.mp3
//1.정적 파일 찾기. 2.파일을 메모리에 로딩 후 response

var http=require('http');
var fs=require('fs');
var server=http.createServer(function(request,response){
    if(request.url =='/favicon.ico'){
    }else if(request.url=='/'){
        fs.readFile("./index.html",'utf8',function(err,data){
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        })
    }else if(request.url=='/images/jimin.jpg'){//http://localhost:8888/jimin.jpg
        
        fs.access('./images/jimin.jpg',function(err){//파일이 있는지 확인
            if(err){
                //response.writeHead(404);
                response.statusCode=404;
                response.end();
            }
            fs.readFile("./images/jimin.jpg",function(err,data){
                response.writeHead(200,{'Content-Type': 'image/jpeg'});
                response.write(data);
                response.end();
            })
        })

    }else if(request.url=='/music.mp3'){
        response.writeHead(200,{'Content-Type': 'audio/no3'})
        //fs.createStream()...으로 처리해야 함
    }else if(request.url=='/video.mp4'){
        response.writeHead(200,{'Content-Type': 'video/mp4'})
        //fs.createStream()...
    }

})
server.listen(8888);

