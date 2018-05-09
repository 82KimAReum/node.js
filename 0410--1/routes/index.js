
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });//index.jade로 감
};
exports.form = function(req, res){
	res.render('join-form', {title : '회원 가입'});   //join-form.jade
}
exports.form1 = function(req, res){
	res.render('join-form1', {username : req.body.username,
        useremail : req.body.useremail,
        title : 'Register Success'});
}