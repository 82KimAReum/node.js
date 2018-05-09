// var str='박지민';
// console.log('귀하의 이름은 %s이군요',str);
// console.log('귀하의 이름은 '+str +'이군요');

var student={
    name: '박지민',
    age:24,
    address: {
        sido:'서울시',
        gugun: '종로구',
        dong:'관철동'
    }
    
}
console.log('이름 %s',student['name']);
console.log('studnet = ',student);
console.log('studnet = '+ student);//object object
console.log('student =%j',student)//{'name':'박지민','age':24,....}