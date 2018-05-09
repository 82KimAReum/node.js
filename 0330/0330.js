function task1(){
    console.log("task 1 Start")
    setTimeout(function(){
        console.log('Task 1 end')
    },3000)//3초뒤에 찍힘
}
function task2(){
    console.log("task 2 Start")
    setTimeout(function(){
        console.log('Task 2 end')
    },1000)//1초뒤에 찍힘
}

task1();
task2();
// C:\NodeJSHome\0330>node 0330.js
// task 1 Start
// task 2 Start
// Task 2 end
// Task 1 end
//비동기는  순차적으로 콜 하면 내가 원하는순차대로 나오지 않음 
//따라서 1함수 안에서 콜백으로 2를 호출해야 함