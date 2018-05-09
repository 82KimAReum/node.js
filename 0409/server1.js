/**
 * express.static(): 정적파일 처리를 위한 moddleware
 * 
 */
var express =require('express');
var app=express();
app.use(express.static(__dirname+"/images"));
app.use(function(req,res){
	res.send('<h1>hello Express</h1>');
})


app.listen(80);