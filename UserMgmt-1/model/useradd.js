/**
 * useradd.js
 */
module.exports =function(dbname,username,userid,userpwd,callback){
	var member = dbname.collection('Member');
	member.insert({'id':userid,'name':username,'password':userpwd}
	,function(err,result){
		if(err){
			console.log(err);callback(null,null);
		}
		callback(null,result);
	})
}