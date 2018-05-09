var http= require('http'),
    crossroads=require('crossroads');
//
//<경로 >
//-필수: {} 여기까지는 꼭 써야 하는 부분 
//  localhost/category/{subject}
//  localhost/category/kor
//  localhost/category/eng

//-옵션:선택적인 부분 ':옵션:'으로 /movies/:id   (id는 넣을수도 않넣을수도 있으므로)
//  localhost/category/:subject:/:id    //뒤에도 옵션이면 양쪽 :: 아니면 앞에만 :
//  localhost/category/
//  localhost/category/kor
//  localhost/category/eng/3
crossroads.addRoute('/category/{subject}/:pub:/:id:',function(subject,pub,id){
    //category밑에 subject는 필수 id는 선택적으로 들어옴
    console.log('subject: '+subject);
    if(!pub && !id){//둘다 없으면
        console.log('pub nothin and id nothing');
    }else if(!id){//id만 없으면
        console.log('pub :'+pub + ', and id  nothing');
        return ;
    }else{//둘다 있으면
        console.log('pub :'+pub + ',  id :'+ id);
        return ;
    }
});

http.createServer(function(req,res){
    console.log(req.url);
    crossroads.parse(req.url);
    res.end('end');
}).listen(80,function(){console.log('run')})