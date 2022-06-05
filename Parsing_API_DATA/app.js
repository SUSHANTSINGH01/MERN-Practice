const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.get("/", function(req,res){ 
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    const query = req.body.cityName;
    const apiKey = "a950209eb1d988b497862fdc5c87dde5";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(resp){
      
        resp.on("data", function(data){
           const weatherData1 = JSON.parse(data);
          const temp = weatherData1.main.temp;
          //console.log(weatherData1);
          //res.write("")
           res.send("Current weather of " + query + " is :" + temp);
        })
    })
    
})

app.listen(3000,function(){
    console.log("server started.");
});