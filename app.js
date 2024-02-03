const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/Date.js");
var items = ["buy food","cook food","eat food"];
let work_items = [];
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res)
{
    let Day = date.getDate();
    res.render('list',{today:Day, another_item:items});
});
app.get("/work",function(req,res)
{
    let Day = 'work';
    res.render('list',{today:Day, another_item:work_items});
})
app.post("/",function(req,res)
{
    var item = req.body.newitem;
    if(req.body.list === "work")
    {
       work_items.push(item);
       res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
   
    
    
})
app.listen("3000",function(){
    console.log("Your server has been started on port 3000");
});