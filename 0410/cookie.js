/**
 * cookie.js
 */
var express =require('express');
var cookieParser=require('cookie-parser');
var app=express();

app.use(cookieParser());

app.get('/get',function(req,res){//get cookie
	//console.log('Cookies: '+ JSON.stringify(req.cookies));
	//Cookies: {"user":{"id":"chimi","name":"한지민","age":24}}
	
	var cookie=req.cookies.user;
	console.log("id: "+cookie.id);
	console.log("name: "+cookie.name);
	console.log("age: "+cookie.age);
	
});
app.get('/set',function(req,res){//set cookie
	res.cookie('user',{
		id:'chimi',
		name:'한지민',
		age:24
	});
	res.redirect('/get');
});

app.listen(80,function(){
	console.log("run cookie.js");
});