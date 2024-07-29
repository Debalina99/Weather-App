const apiKey="02d634255ddd0e63333a3e5b8ce1b992";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const res=await fetch(apiUrl+ city +`&appid=${apiKey}`);
    
    if(res.status==404){
        document.querySelector(".err").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await res.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/892/892300.png";
        } else if(data.weather[0].main=="Clear"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/11742/11742559.png";
        } else if(data.weather[0].main=="Rain"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/826/826957.png";
        } else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/2675/2675876.png";
        } else if(data.weather[0].main=="Mist"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/8373/8373540.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".err").style.display="none";

    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
