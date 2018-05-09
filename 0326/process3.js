process.nextTick(myfunction);
process.nextTick(myfunction1);
console.log('hello');

function myfunction(){
    console.log('im fun');
}

function myfunction1(){
    console.log('im fun1');
}
//스레드에 들어있는 함수를 비동기적으로 돌림
//consolerhk function은 별개라서 function끼리만 순차 적용