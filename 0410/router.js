/**
 * router.js
 */
var express=require('express');
var router=express.Router();

router.get('/hello',sayHello);
router.get('/howAreYou/:who',sayThankYou);
function sayHello(req,res){
	res.send("hi");
}
function sayThankYou(req,res){
	var who=req.params.who;
	res.end("Fine Thanks "+who+"!, And you ^^");
}

module.exports=router;