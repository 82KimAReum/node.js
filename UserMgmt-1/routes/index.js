var express = require('express');
var database =require('./connect');
var certiuser=require('../model/certiuser');
var useradd=require('../model/useradd');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',function(req,res){
	var userid = req.body.userid;
	var userpwd = req.body.userpwd;
	//console.log(userid +', '+ userpwd)
	new certiuser(database,userid,userpwd,function(err,results){
		if(err){console.log(err);return;}
		//console.log(results);
		if(results){
//[ { _id: 5ad04f1e7752b9f5a290686c,
//    id: 'user01',
//    name: '한지민',
//    password: '123456' } ]
			res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
			res.write("<h1>Login</h1>");
			res.write("<ul>");
			res.write("<li>사용자 이름 : "+results[0].name+"</li>");
			res.write("<li>사용자 아이디 : "+results[0].id+"</li>");
			res.write("<li>사용자 비밀번호: "+results[0].password+"</li>");		
			res.write("</ul>");
			res.end();
		}else{
			res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
			res.write("<h1>Login Failure</h1>");
			res.write('<div style="color:red">일치하는 아이디 혹은 비밀번호가 없습니다.</div>');
			res.write("<div><a href='./login.html'>로그인 다시하기 </a></div>")
			res.end();
		}
		
	});
});



router.post('/register',function(req,res){
	var username=req.body.username;
	var userid=req.body.userid;
	var userpwd=req.body.userpwd;
	useradd(database,username,userid,userpwd,function(err,result){
		if(err){
			console.log(err);return;
		}
		
		if(result){
			//console.log(result);
			res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
			res.write("<h1>user Register Success</h1>");
			res.write("<div><a href='./login.html'>로그인 하기 </a></div>")
			res.end();
		}else{
			res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
			res.write("<h1>User Register Failure</h1>");
			res.write('<div style="color:red">사용자 등록 실패! 잠시후 다시 시도해 주세요.</div>');
			res.write("<div><a href='./useradd.html'>사용자 등록 다시하기 </a></div>")
			res.end();
		}
	})
	
})


module.exports = router;
