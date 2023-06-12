var weatherInfo = {locname : "", temp : "", windspeed : "", humidity : ""};
var getReport = function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?&units=metricq=" + city + "&appid = ").then((response)=>response.json()).then((data)=>{
        weatherInfo.locname = data.name;
        weatherInfo.temp = data.main.temp;
        weatherInfo.windspeed = data.wind.speed;
        weatherInfo.humidity = data.main.humidity;

        document.getElementById("wName").innerHTML = weatherInfo.locname;
        document.getElementById("wTemp").innerHTML = weatherInfo.temp;
        document.getElementById("wWindSpeed").innerHTML = weatherInfo.windspeed;
        document.getElementById("myHumidity").innerHTML = weatherInfo.humidity;
    });
}