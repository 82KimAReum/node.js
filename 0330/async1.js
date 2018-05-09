//async1.js
var async= require('async');
async.waterfall([
    function(callback){
        callback(null,'one','two');
    },
    function(arg1,arg2,callback){
        console.log('(%s , %s)',arg1,arg2);
        callback(null,'three');
    },
    function(arg3,callback){
        console.log('%s',arg3);
        callback(null,'Done');//마지막 콜백에게 감
    },
    
],function(error,results){
    if(error){console.log('Error: ',error);return;}
    console.log('results:',results);
})
// C:\NodeJSHome\0330>node async1.js
// (one , two)
// three
// results: Done