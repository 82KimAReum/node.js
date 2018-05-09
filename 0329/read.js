var read =require('read');

read({prompt:'Username : '},function(error,username){
    if(error){return;}
    //console.log('username = ',result);
    // C:\NodeJSHome\0329>node read.js
    // Username : 박지민
    // username =  박지민
    read({prompt: 'User age:'},function(error,age){
        if(error){return;}
        read({prompt: 'User Address: '},function(error,address){
            if(error){return;}
            console.log('Name: %s , Age: %s , Adress: %s ',username,age,address);
            // C:\NodeJSHome\0329>node read.js
            // Username : 박지민
            // User age: 24
            // User Address: 종로
            // Name: 박지민 , Age: 24 , Adress: 종로
        });
    });
});
