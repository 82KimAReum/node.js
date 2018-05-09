/**
 * certiuser.js
 */
module.exports =function(dbname,callback){
	var member = dbname.collection('test0413');
	member.find({})
	.toArray(
		function(err,results){
			if(err){
				console.log(err);return;
			}
			if(results.length>0){
				 for (var i=0; i<results.length;i++){
					 console.log(results[i].sa + ',' + results[i]['bu']+","+results[i]['gi']+','+results[i].jic+','+results[i].ya+','+results[i].ga+','+results[i].chong+','+results[i].so+','+results[i].sil);
				 }
				 callback(null,results);
			}else{
				console.log('not found');
				callback(null,null);
			}
		});
}