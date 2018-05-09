//class방식

function Student(name,age){
    var name =name;
    var age =age;
    this.getNaqme =function(){
        return name;
    }
    this.getAge=function(){
        return age;
    }
    this.toString=function(){
        console.log('%s : %d',name , age);
    }
}

//module.exports.Student= Student;
exports.Student= Student;
//module생략가능