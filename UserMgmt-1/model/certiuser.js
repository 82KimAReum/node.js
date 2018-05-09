/**
 * certiuser.js
 */
module.exports =function(dbname,userid,userpwd,callback){
	var member = dbname.collection('Member');
	member.find({'id':userid,'password':userpwd})
	.toArray(
		function(err,results){
			if(err){
				console.log(err);return;
			}
			if(results.length>0){
				console.log(results);
				callback(null,results);
			}else{
				console.log('not found');
				callback(null,null);
			}
		});
}