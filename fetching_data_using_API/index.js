const { response } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res)
{
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=a950209eb1d988b497862fdc5c87dde5";
    https.get(url, function(resp){
      
        resp.on("data", function(data){
           const weatherData1 = JSON.parse(data);
           //const temp = weatherData.main.temp;
           console.log(weatherData1);
            res.send("weather data : " + data);
        })
    })
    
    
});

app.listen(3000,function(){
    console.log("server started.");
});