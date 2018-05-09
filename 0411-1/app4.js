/**
 * app4.js
 */
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sequelize = new Sequelize('world', 'root', '1234', {
	dialect : 'mysql',
	host : 'localhost',
	port : 3306,
	operatorsAliases:Op,
	pool: {
	    max: 10,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	},
});
var User = sequelize.define('user', {
	  firstname: {
		  type : Sequelize.STRING   //VARCHAR(255)
	  },
	  lastname: {
		  type : Sequelize.STRING
	  }
});

User.create({
	firstname : '훈아', lastname : '나'
}).then(success, failure);
User.create({
	firstname : '미자', lastname : '이'
}).then(success, failure);
User.create({
	firstname : '지민', lastname : '한'
}).then(success, failure);

function success(){
	console.log("Success");
}
function failure(){
	console.log("Failure");
}


//Executing (default): INSERT INTO `users` (`id`,`firstname`,`lastname`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'훈아','나','2018-04-11 03:51:53','2018-04-11 03:51:53');
//Executing (default): INSERT INTO `users` (`id`,`firstname`,`lastname`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'미자','이','2018-04-11 03:51:53','2018-04-11 03:51:53');
//Executing (default): INSERT INTO `users` (`id`,`firstname`,`lastname`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'지민','한','2018-04-11 03:51:53','2018-04-11 03:51:53');
//Success
//Success
//Success