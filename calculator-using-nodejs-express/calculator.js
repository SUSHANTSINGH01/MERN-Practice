//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" ,function(req, res){

    res.sendFile(__dirname + "/index.html");

});

app.post("/" , function(req, res){

    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);

    var res1=num1+num2;
    res.send("Sum of num1 and num2 is : " + res1);
    //console.log("your post.")
});

app.get("/BMIcalculator" ,function(req, res){

    res.sendFile(__dirname + "/bmicalculator.html");

});

app.post("/BMIcalculator" , function(req, res){

    var num1=parseFloat(req.body.n1);
    var num2=parseFloat(req.body.n2);

    var res1=num1/(num2*num2);

    res.send("The BMI  is : " + res1);
    //console.log("your post.")
});


app.listen(3090, function(){
    console.log("your server has started.");
})

