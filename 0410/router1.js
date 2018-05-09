/**
 * router1.js
 */
var express = require('express');
var router = express.Router();


router.post('/login', function(req, res){
	var userid = req.body.userid;
	var userpwd = req.body.userpwd;
	if(userid == 'javaexpert' && userpwd == '123456'){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write('<h1>Login Success</h1>');
		res.end();
	}else{
		res.send('userid = ' + userid + ', userpwd = ' + userpwd);
	}
	
});
module.exports = router;