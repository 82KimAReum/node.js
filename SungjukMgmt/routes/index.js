var express = require('express');
var model=require('../models/student');
var calc=require('../models/calc');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: '성적 관리 프로그램' });
	var count=0;
	model.count().then(function(results){
		count=results;
	});
	model.findAll({attribute:['hakbun','irum','kor','eng','mat','edp']})
		.then(function(results){
			res.render('index', { title: '성적 관리 프로그램',data:results, count:count});
		},function(){
			console.log('not found');
		})
});
router.get('/input',function(req,res){
	res.render('input',{title:'학생 데이터 입력'});
});
router.post('/insert',function(req,res){
	//console.log(req.body)
	//res.render('insert',{})
	var student=new calc(req.body.txtKor,req.body.txtEng,req.body.txtMat,req.body.txtEdp);
	//console.log(student.calcSum());
	model.create({
		hakbun: req.body.txtHakbun,
		irum: req.body.txtIrum,
		kor: req.body.txtKor,
		eng: req.body.txtEng,
		mat: req.body.txtMat,
		edp: req.body.txtEdp,
		tot: student.calcSum(),
		avg: student.calcAvg(),
		grade: student.calcGrade()
	}).then(function(){//성공하면
		res.redirect('/');
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
