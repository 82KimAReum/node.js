/**
 *morgan.js
 */
var express=require('express');
var morgan=require('morgan');
var app=express();
app.use(morgan('dev'));
//GET / 200 2.737 ms - 15

app.get('/',function(req,res){
	res.send("GET, localhost/");
});
app.get('/:who',function(req,res){
	res.send("GET, localhost/"+req.params.who);
});

app.listen(80,function(){
	console.log('run');
});
//localhost
//localhost/한지민