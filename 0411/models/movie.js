/**
 * movie.js
 */
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sequelize = new Sequelize('world', 'java', '1234', {
	dialect : 'mysql',
	host : '192.168.56.3',
	port : 3306,
	operatorsAliases:Op,
	pool: {
	    max: 10,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	},
});
var Movie = sequelize.define('movie', {
	movie_id : { type : Sequelize.INTEGER, primaryKey : true },
	title : { type : Sequelize.STRING, allowNull : false },
	director : { type : Sequelize.STRING, allowNull : false },
	year : { type : Sequelize.INTEGER, allowNull : true },
	synopsis : {type : Sequelize.STRING(2000), allowNull : true}
});

module.exports = Movie;




