/**
 * movie.js
 */
var Sequelize=require('sequelize');
var Op=Sequelize.Op;
var sequelize=new Sequelize('world','root','1234',{
	dialect:'mysql',
	host:'localhost',
	operatorsAliases:Op,
	port:3306,
	pool:{
		max:10,
		min:0,
		idle:1000
	}
});

var Movie=sequelize.define('movie',{
	title: {type: Sequelize.STRING,allowNull:false},
	director: {type: Sequelize.STRING,allowNull:false},
	year: {type: Sequelize.INTEGER},
	synopsis:{type: Sequelize.STRING(1024)}
});

module.exports=Movie;