// var array = process.argv;
// console.log(array.lenght);
// process.argv.forEach(function(val,index){
//     console.log(index+'-->'+val);

// });
//Node.exe process1.js 3 + 5



var first = process.argv[2];
var second= process.argv[4];
var answer =null;
switch(process.argv[3]){
    case '+':answer=parseInt(first)+parseInt(second);break;
    case '-':answer=parseInt(first)-parseInt(second);break;
    case 'x':answer=parseInt(first)*parseInt(second);break;
    case '/':answer=parseInt(first)/parseInt(second);break;


}
console.log(first + process.argv[3]+ second + ' = '+ answer);
