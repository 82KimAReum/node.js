/**
 * http://usejsdoc.org/
 */
var express=require("express");
var app=express();
var favicon = require('serve-favicon');
var path = require('path');

app.set('port',80);
app.use(require('./router'));
app.use(favicon(__dirname+"/images/favicon.ico"));
//app.use(favicon(path.join(__dirname, '/images/', 'favicon.ico')))
//app.get('/',function(req,res){
//	res.send('<h1>favicon demo</h1>')
//})
app.use(express.static(__dirname));

app.listen(app.get('port'),function(){
	console.log('run'+app.get('port'));
})