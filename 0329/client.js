//client.js
var dnode= require('dnode');
var read= require('read');

read({prompt:'첫번째 숫자 : '},function(error,first){
    if(error){return ; }
    read({prompt: '두번째 숫자 : '},function(error,second){
        if(error){return ; }
        dnode.connect(9999,function(rpc){
            rpc.mul(first,second,function(result){//5,9를 보내고 result받음
                console.log('%s x %s = %s',first, second,result);
            });
        });
    })
})

// C:\NodeJSHome\0329>node client.js
// 첫번째 숫자 : 10
// 두번째 숫자 : 10
// 10 x 10 = 100
