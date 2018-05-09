var connect=require('connect');

var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url=='/'){

    }else if(req.url=='/register'){

    }else if(req.url=='images/jimin.jpg'){
        
    }
}).listen(80,function(){
    console.log('run');
})