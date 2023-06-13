var weatherInfo = {locname : "", loctemp : "", windspeed : "", lochumidity : ""};
var getReport = function(){
    var city = document.getElementById("cityName").value;
    var apiKey = "7141321262c8604c06f3754701c492cb";
    if(city == ""){
        alert("Please enter city name");
    } 
    else{
        fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=" +apiKey).then((response)=>response.json()).then((data)=>{
            weatherInfo.locname = data.name;
            weatherInfo.loctemp = data.main.temp;
            weatherInfo.windspeed = data.wind.speed;
            weatherInfo.lochumidity = data.main.humidity;
            console.log(data.name);

            document.getElementById("wName").innerHTML = weatherInfo.locname;
            document.getElementById("wTemp").innerHTML = weatherInfo.loctemp;
            document.getElementById("wWindSpeed").innerHTML = weatherInfo.windspeed;
            document.getElementById("myHumidity").innerHTML = weatherInfo.lochumidity;
        });
    }
}