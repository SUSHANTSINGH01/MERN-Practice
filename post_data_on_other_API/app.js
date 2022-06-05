const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res){ 
    res.sendFile(__dirname + "/reg.html");
    
});


app.post("/", function(req,res){

    var firstname = req.body.fname;
    var lastName = req.body.lname;
    var Email = req.body.email;

    console.log(firstname, lastName, Email);
    res.send("hello everyone." + firstname + lastName + Email);
});


app.listen(3000,function(){
    console.log("server started.");
});