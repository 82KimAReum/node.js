var http=require('http');
var url=require('url');
var server =http.createServer(function(request,response){
   var username,userage;
   var body= '<!DOCTYPE html>'+
   '<html lang="en">'+
   '<head>'+
       '<meta charset="UTF-8">'+
       '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
       '<meta http-equiv="X-UA-Compatible" content="ie=edge">'+
      ' <title>회원가입</title>'+
   '</head>';
    if(!request.url.indexOf('/register')&&request.method.toLowerCase()=='get'){
        //찾은 번째가 0이 되기 때문에 0은 거짓임으로 !(not)을 붙임
        var query=url.parse(request.url,true)['query'];
        username =decodeURI(query.username);
        userage=query.userage;
        body+= '<body>'+
                    '<ul>'+
                    '<li>Name: '+username +'</li>'+
                    '<li>Age: '+userage +'</li>'+
                    '</ul>' +
                    " </body>"+
                    "</html>";
    }
    if(request.url=='/'){
         body+=
        '<body>'+
        "<form action='/register' method='get'   >"+      
            "Name:<input type='text'name='username'><br>"+
            "Age: <input type ='number'name='userage'><br>"+
          "  <input type='submit'value='가입'>"+
       " </form>"+
   " </body>"+
    "</html>";
}
    response.statusCode=200;
    response.statusMessage='OK';
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.write(body);
    response.end();

});
server.listen(9999);