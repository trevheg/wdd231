const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.336111&lon=-121.890556&units=metric&appid=db7ee3dc0b03b0fd8e6459528a129323";
const currentWeatherUrl =  "https://api.openweathermap.org/data/2.5/weather?lat=37.336111&lon=-121.890556&units=metric&appid=db7ee3dc0b03b0fd8e6459528a129323";



async function currentApiFetch() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data)

            const date = new Date();
            // console.log(date);
            // getDay(date);
            weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherIcon.setAttribute("alt", data.weather[0].main);
            weatherDescription.textContent = `${data.weather[0].description}`;
            currentTemp.innerHTML = `${Math.round(data.main.temp)}&#176;C`;

            
        } else {
            throw Error(await response.text());
        }
        
    } catch(error) {
        console.log(error);
    }
}

currentApiFetch();


async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();

            const date = new Date(data.list[0].dt_txt);
            console.log(date);
            getDay(date);
            // weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            // weatherIcon.setAttribute("alt", data.weather[0].main);
            // figcaption.textContent = `The weather is ${data.weather[0].description}`;
            // currentTemp.innerHTML = `${data.main.temp}&#176; C`;

            console.log(data)
            
        } else {
            throw Error(await response.text());
        }
        
    } catch(error) {
        console.log(error);
    }
}

forecastApiFetch();

function getDay(date) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day = weekday[date.getDay()];
    // console.log(day);
}