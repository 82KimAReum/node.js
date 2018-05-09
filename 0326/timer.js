function sayHello(){
    console.log('hello');

}//3초가 지난 후 
var mytime = setTimeout(sayHello,3*1000);

//취소
clearTimeout(mytime);

