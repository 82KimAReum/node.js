//async.js
var async=require('async');

function task1(callback){
    console.log("task 1 Start")
    setTimeout(function(){
        console.log('Task 1 end') 
        callback('apple','task1');
    },3000)//3초뒤에 찍힘
    
}
function task2(callback){
    console.log("task 2 Start")
    setTimeout(function(){
        console.log('Task 2 end')
        callback(null,'task2');
    },1000)//1초뒤에 찍힘
}

async.series([task1, task2],function(err,results){
    if(err){console.log('error: ',err);return;}//이벤트를 의도적으로 중지시킬수 있음
    console.log('results: ',results);
})

// C:\NodeJSHome\0330>node async.js
// task 1 Start
// Task 1 end
// task 2 Start
// Task 2 end
// results:  [ 'task1', 'task2' ]

// C:\NodeJSHome\0330>node async.js
// task 1 Start
// Task 1 end
// error:  apple