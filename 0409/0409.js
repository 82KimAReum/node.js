var express=require('express');
var app=express();

//app.get("/",renderIndex);
//function renderIndex(req,res){
//	
//}

app.use(express.static(__dirname,{'index':"index.html"}));
//app.get("/movies",showList);
//app.get("/movies/:id",showMovie);
//app.post("/movies",addMovie);
//app.put("/movies",movieUpdate);
//app.delete("/movies/:id",movieDelete);

app.listen(80);