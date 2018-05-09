var Twitter = require('twitter');
var readline= require('readline');
var myread= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var client = new Twitter({
    consumer_key:'odOb9mSpDqBsrvl3NPp3VJLIh' ,
    consumer_secret:'dDOAi4JosuaSOrToSeQdo5XUrvQhVYm3hVLGNULcVMMGJ6HHO4' ,
    access_token_key:'4812512706-CobtLueeHwoXwdJgKY2DekjDOiSHifuGKDm3xOD' ,
    access_token_secret: '3K9Wrfu1MUYUeU28Klx8hjIFXQpgDcgFgas279IbQNx3k'
});
myread.question('Twitter에게 보낼 메세지: ',function(answer){
    client.post('statuses/update', {status: answer},  function(error, tweet, response) {
    if(error) {
        console.log(error);return;
    }
    console.log(tweet);  // Tweet body. 
    //console.log(response);  // Raw response object. 
  });
  myread.close();
});
