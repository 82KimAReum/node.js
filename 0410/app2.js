/**
 * app2.js
 */
var express = require('express');
var jade = require('jade');
var app = express();
app.set('views',__dirname +'/views');
app.set('view engine','jade');

app.use(express.static(__dirname));
app.get('/', function(req, res){
	res.render('jade',{'title':'Jade Demo'});
});

app.listen(9999, function(){
	console.log("Running app2");
})