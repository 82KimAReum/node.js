/**
 * student.js
 */
var Sequelize=require('sequelize');
var Op=Sequelize.Op;
var sequelize=new Sequelize('world','root','1234',{
	dialect:'mysql',
	host:'192.168.56.3',
	port:3306,
	operatorsAliases:Op,
	pool:{
		max:10,
		min:5,
		idle:1000
	},
	define:{
		charset:'utf8',
		collate:'utf8_general_ci',
		timestamps:true
	}
});
var Student= sequelize.define('Student',{
	hakbun: {type:Sequelize.STRING(4),primaryKey:true},
	irum: {type:Sequelize.STRING(20),allowNull:false},
	kor: {type:Sequelize.INTEGER(3),allowNull:false},
	eng: {type:Sequelize.INTEGER(3),allowNull:false},
	mat: {type:Sequelize.INTEGER(3),allowNull:false},
	edp: {type:Sequelize.INTEGER(3),allowNull:false},
	tot: {type:Sequelize.INTEGER(3)},
	avg: {type:Sequelize.DOUBLE},
	grade:{type:Sequelize.STRING(1)}
	
});

module.exports=Student;