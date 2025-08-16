

const apiKey ="dd6fb2b96070980469f85d2db5d0642a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {

    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
            
    if(response.status == 404){
         document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else{
         var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
        //update the image 
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "IMAGES/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "IMAGES/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "IMAGES/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "IMAGES/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "IMAGES/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "IMAGES/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"; 
    }

}

            

searchBtn.addEventListener("click", ()=> {
    //whenever we click the search button this will call this function
    checkWeather(searchBox.value);
})
