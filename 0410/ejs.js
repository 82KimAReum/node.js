/**
 * ejs.js
 */
var express=require('express');
var app=express();

app.set('views',__dirname +'/views');
//viewsdp ejs를 넣을 거임
app.set('view engine','ejs');
var data=[
	{'title':'baseball','image':'baseball.png'},
	{'title':'basketball','image':'basketball.png'},
	{'title':'football','image':'football.png'},
	
];
app.use(express.static(__dirname));
app.get('/',function(req,res){
	//engin 사용 set
	//engin 지정 render
	res.render('sports',{'title':'구기종목','sports':data});
	//키 title 값 sports
});



app.listen(8888,function(req,res){
	console.log("run ejs.js");
})