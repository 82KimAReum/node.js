//read1.js
var read= require('read');
var Seq= require('seq');

Seq()
//본인안에 만들어 진 변수는 지역 변수가 되기 때문에 사용할때vars로 가져와야 함
    .seq(function(){
        read({prompt:'user name: '},this.into('username'));
    })
    .seq(function(){
        read({prompt:'Password: ',silent: true},this.into('userpwd'))
    })
    .seq(function(){
        read({prompt:'user address: '},this.into('address'))
    })
    .seq(function(username,userpwd,address){
        //console.log(username + ' ,'+userpwd+' ,'+ address);
//C:\NodeJSHome\0329>node read1.js
// user name: 박지민
// Password:
// user address: 서울시 종로구 종로2가
// 서울시 종로구 종로2가 ,false ,undefined
        console.log(this.vars.username + ' ,'+this.vars.userpwd+' ,'+ this.vars.address);
// C:\NodeJSHome\0329>node read1.js
// user name: 박지민
// Password:
// user address: 종로2가
// 박지민 ,12345678 ,종로2가
    });
