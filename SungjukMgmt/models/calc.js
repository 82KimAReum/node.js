/**
 * calc.js
 */
module.exports=function(kor,eng,mat,edp){
	var kor=parseInt(kor);
	var eng=parseInt(eng);
	var mat=parseInt(mat);
	var edp=parseInt(edp);
	var sum,avg,grade;
	this.calcSum=function(){
		sum =kor +eng + mat+ edp;
		return sum;
	}
	this.calcAvg=function(){
		avg=sum/4;
		return avg;
	}
	this.calcGrade=function(){
		grade = (avg <= 100 && avg >= 90) ? 'A' :
            (avg < 90 && avg >= 80) ? 'B' :
           	 (avg < 80 && avg >= 70) ? 'C' :
           		 (avg < 70 && avg >= 60) ? 'D' : 'F';
		return grade;
	}
	
}