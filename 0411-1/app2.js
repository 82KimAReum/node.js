/**
 * HQL
 * 데이터 타입이 따로있는데 여러 db에 호환하기 위해서
 * app2.js
 */
var Sequelize=require('sequelize');
var Op = Sequelize.Op; //필수//operatorsAliases:Op
var sequelize=new Sequelize('world','root','1234',{
	dialect:'mysql',
	host:'localhost',
	port:3306,
	operatorsAliases:Op,
	pool: {
	    max: 10,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	  }
	
});


//promise.than
//인증
sequelize.authenticate()
  .then(function(success){
    console.log('Connection has been established successfully.');
  })
  .catch(function(err){
    console.error('Unable to connect to the database:', err);
  });