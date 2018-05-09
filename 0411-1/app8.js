/**
 * app8.js
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
//lastname이 '나'인 사람을 지움
User.destroy({
	where:{
		lastname:'나'
	}
}).then(success, failure);

function success(){
	console.log('delete success');
}
function failure(){
	console.log("Not Found");
}
//Executing (default): DELETE FROM `users` WHERE `lastname` = '나'
//	delete success



