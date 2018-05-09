//class방식

function Student(hakbun,irum,kor,eng,mat,edp){
    var hakbun=hakbun;
    var irum=irum.toString('utf-8');
    var kor=parseInt(kor);
    var eng= parseInt(eng);
    var mat= parseInt(mat);
    var edp =parseInt(edp);
    var sum=parseInt(sum); 
    var avg= parseInt(avg); 
    var grade =grade;

    this.calc=function (){       
         sum = kor + eng + mat+ edp;
         avg = sum / 4;
        grade = (avg >= 90 && avg <= 100) ? 'A' :
                                (avg < 90 && avg >= 80) ? 'B' :
                                  (avg < 80 && avg >= 70) ? 'C' :
                                    (avg < 70 && avg >= 60) ? 'D' : 'F';
       
      }
    
    
    this.toString=function(){
       var j={
           'hakbun':hakbun,
           'irum':irum.toString('utf-8'),
           'kor':kor,
           'eng':eng,
           'mat':mat,
           'edp':edp,
           'sum':sum,
           'avg':avg,
           'grade':grade
       }
       return j;
    }
}

//module.exports.Student= Student;
exports.Student= Student;
//module생략가능