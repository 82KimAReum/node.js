//async3.js
var async=require('async');

async.parallel({
    one : function(callback){
        setTimeout(function(){
            callback(null,'One');
        },3000);
    },
    two : function(callback){
        setTimeout(function(){
            callback(null,'Two');
        },1000);
    }

},function(error,results){
    if(error){
        console.loge(error);return;
    }
    console.log(results);
})
//동시에 함
// C:\NodeJSHome\0330>node async3.js
// { two: 'Two', one: 'One' }