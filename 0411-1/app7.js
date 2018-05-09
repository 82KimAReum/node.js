/**
 * app7.js
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
//한지민을 한지혜로
User.update({
	firstname:'지혜'
},{
	where:{
		lastname:'한'
	}
}).then(success, failure);

function success(){
	console.log('update success');
}
function failure(){
	console.log("Not Found");
}
//Executing (default): UPDATE `users` SET `firstname`='지혜',`updatedAt`='2018-04-11 04:16:23' WHERE `lastname` = '한'
//	update success



