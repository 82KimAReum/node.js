//sungjukmgmt.js
var student=require('./student.js').Student;
var read =require('read');
var fs=require('fs');

read({prompt:'학번 : '},function(error,hakbun){
    if(error){return;}
    read({prompt: '이름:'},function(error,irum){
        if(error){return;}
        read({prompt: '국어: '},function(error,kor){
            if(error){return;}
            read({prompt: '영어: '},function(error,eng){
                if(error){return;}
                read({prompt: '수학: '},function(error,mat){
                    if(error){return;}
                    read({prompt: '전산: '},function(error,edp){
                        if(error){return;}
                        //json 만들기
                        var std=new student(hakbun,irum,kor,eng,mat,edp);
                        std.calc();
                        var j=std.toString();
                        
                        fs.writeFile('./sungjuk.txt',JSON.stringify(j),function(err){
                            if(err){console.log(err); return ;}
                            console.log('success');});
                        });
                    });
                });               
            });
        });
    });

