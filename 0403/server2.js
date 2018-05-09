var http = require('http'), 
      fs = require('fs'),
      formidable = require('formidable');

var server = http.createServer(function(req, res){
   if(req.url == '/' && req.method.toLocaleLowerCase() == 'get'){   //첫 페이지라면
      showFile(req, res);
   }else if(req.method.toLocaleLowerCase() == 'get' && req.url.indexOf('/uploadfiles') == 0){   //image 라면
      //console.log(req.url);  //  /uploadfiles/jimin.jpg
      res.writeHead(200, {'Content-Type':'text/html'});
      fs.createReadStream('./' + req.url).pipe(res);
      return ;
   }else if(req.method.toLocaleLowerCase() == 'post'){
      addFile(req, res); 
   }
});

server.listen(80, function(){
   console.log("Running...");
});

var movieList = [{title : '아바타', userimg : 'jimin.jpg'}];

function showFile(req, res){
   res.writeHead(200, {'Content-Type':'text/html'});
   res.write("<!DOCTYPE html>");
   res.write("<html lang=\"en\">");
   res.write("<head>");
   res.write("<meta charset=\"UTF-8\">");
   res.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
   res.write("<title>Favorite Movie Poster Collection</title>");
   res.write("</head>");
   res.write("<body>");
   res.write("<h2>귀하가 좋아하시는 영화포스터를 올려주세요.</h2>");
   res.write("<form action='/upload' method='post' enctype='multipart/form-data'>");
   res.write("제목 : <input type='text' name='title' /><br />");
   res.write("포스터 : <input type='file' name='userimg' /><br />");
   res.write("<input type='submit' value='전송' />");
   res.write("</form>");
   res.write("<hr />");
   for(var i = 0 ; i < movieList.length ; i++){
      res.write('<figure>');
      res.write("<img src='/uploadfiles/" + movieList[i].userimg + "' height='100' width='100' />");
      res.write('<figcaption>' + movieList[i].title + "</figcaption>");
      res.write('</figure>');
   }
   res.end("</body>");
}
function addFile(req, res){
   var form = new formidable.IncomingForm();
   form.uploadDir = "./uploadfiles";
   form.parse(req, function(err, fields, files){
      var title = fields.title;
      var imageDate = new Date(files.userimg.lastModifiedDate);
      var imgname = 'image_' + imageDate.getHours() + imageDate.getMinutes() + imageDate.getSeconds();
      var extension = files.userimg.name.substring(files.userimg.name.lastIndexOf('.'));  //.jpg
      var path = form.uploadDir + "/" + imgname + extension;
      fs.renameSync("./" + files.userimg.path, path);
      var obj = {title :title , userimg : imgname+extension};
    
      movieList.push(obj);
      res.statusCode = 302;
      res.setHeader('Location', '.');
      res.end();
   });
}