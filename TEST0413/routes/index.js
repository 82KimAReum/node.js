var express = require('express');
var model=require('../models/student');
var calc=require('../models/calc');
var certiuser=require('../models/certiuser');
var useradd=require('../models/useradd');
var db=require('./connect.js');

var router = express.Router();

/* GET home page. */
router.get('/List', function(req, res, next) {//첫패이지
  
//	var count=0;
//	model.count().then(function(results){
//		count=results;
//	});
//	model.findAll({attribute:['hakbun','irum','kor','eng','mat','edp']})
//		.then(function(results){
//			res.render('index', { title: '성적 관리 프로그램',data:results, count:count});
//		},function(){
//			console.log('not found');
//		})
	
	new certiuser(database,function(err,results){
		if(err){console.log(err);return;}
		//console.log(results);
		if(results){
			res.render('index', { title: '사원 봉급 정보 프로그램',data:results, count:results.length});			
			
		}else{
			console.log('인간 없다');
		}
		
	});
});
router.get('/input',function(req,res){
	
	res.render('input',{title:'사원 봉급 정보 입력'});
	
});
router.post('/insert',function(req,res){//add
//	//console.log(req.body)
//	//res.render('insert',{})
//	var student=new calc(req.body.txtKor,req.body.txtEng,req.body.txtMat,req.body.txtEdp);
//	//console.log(student.calcSum());
//	model.create({
//		hakbun: req.body.txtHakbun,
//		irum: req.body.txtIrum,
//		kor: req.body.txtKor,
//		eng: req.body.txtEng,
//		mat: req.body.txtMat,
//		edp: req.body.txtEdp,
//		tot: student.calcSum(),
//		avg: student.calcAvg(),
//		grade: student.calcGrade()
//	}).then(function(){//성공하면
//		res.redirect('/');
//	})
	
	var usersa=req.body.usersa;
	var userbu=req.body.userbu;
	var usergi=req.body.usergi;
	var userjic=req.body.userjic;
	var userya=req.body.userya;
	var userga=req.body.userga;
	var userchong=req.body.userchong;
	var userso=req.body.userso;
	var usersil=req.body.usersil;
	
	var student=new calc(req.body.txtKor,req.body.txtEng,req.body.txtMat,req.body.txtEdp);
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
});

router.get('/detail/:hakbun', function(req, res){
	model.findOne({
		where : {hakbun:req.params.hakbun}
	}).then(function(results){
		console.log("-------------------")
		console.log(results);
		res.render('detail', 
				{title : '[' + req.params.hakbun + '] 학생 정보',
			      data : results });
	});
});

router.post('/update/:hakbun',function(req,res){
	var student=new calc(req.body.txtKor,req.body.txtEng,req.body.txtMat,req.body.txtEdp);
	model.update({
		
		kor: req.body.txtKor,
		eng: req.body.txtEng,
		mat: req.body.txtMat,
		edp: req.body.txtEdp,
		tot: student.calcSum(),
		avg: student.calcAvg(),
		grade: student.calcGrade()
	},{
		where:{
			hakbun:req.body.txtHakbun
		}
	}).then(function(){res.redirect('/');}, function(){console.log("Not Found");});
});

router.get('/delete/:hakbun',function(req,res){
	console.log('getgetgetgetgvetget')
	console.log(req.params);
	model.destroy({
		where:{
			hakbun: req.params.hakbun
		}
	}).then(function(){res.redirect('/')}, function(){console.log('not found')});
});
module.exports = router;
