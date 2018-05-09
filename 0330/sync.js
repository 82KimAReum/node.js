//sync.js
function task1(callback){
    console.log("task 1 Start")
    setTimeout(function(){
        console.log('Task 1 end') 
        callback();
    },3000)//3초뒤에 찍힘
    
}
function task2(){
    console.log("task 2 Start")
    setTimeout(function(){
        console.log('Task 2 end')
    },1000)//1초뒤에 찍힘
}

task1(function(){
    task2();
});

// C:\NodeJSHome\0330>node sync.js
// task 1 Start
// Task 1 end
// task 2 Start
// Task 2 end