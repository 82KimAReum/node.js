/**
 * HQL
 * 데이터 타입이 따로있는데 여러 db에 호환하기 위해서
 * app3.js
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

var User = sequelize.define('user', {
	  firstName: {
	    type: Sequelize.STRING//varcher(255)
	  },
	  lastName: {
	    type: Sequelize.STRING
	  }
	});

//force: true will drop the table if it already exists and remake
User.sync({force: true}).then(success,failure);
function success(){
	console.log('Table create success');
}
function failure(){
	console.log('Table create failure');
}

//
//Executing (default): DROP TABLE IF EXISTS `users`;
//Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255), `lastName` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
//Executing (default): SHOW INDEX FROM `users`
//Table create success