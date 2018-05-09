//promise.js
var Promise =require('promise');

function Task1(fulfilled,rejected){
    console.log('Task1 Start')
    setTimeout(function(){
        console.log('Task1 end');
        fulfilled('Success');
        rejected('Failure');
    },3000);   
}
function Fulfilled(results){
    console.log('success: ',results);
}
function Rejected(error){
    console.log('Error',error);
}
new Promise(Task1).then(Fulfilled,Rejected);
// C:\NodeJSHome\0330>node promise.js
// Task1 Start
// Task1 end
// success:  Success