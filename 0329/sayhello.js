//sayhello.js
//함수방식
module.exports.sayHello=function(){
    console.log('good afternoon');
}
module.exports.multiply=function(a,b){
    //함수방식에서는 module생략가능 
    console.log('%d x %d= %d',a,b,a*b)
}
add=function(a,b){
    //함수방식에서는 module생략가능 
    console.log('%d + %d= %d',a,b,a+b)
}