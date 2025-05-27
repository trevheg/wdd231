const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const todayForecast = document.querySelector("#today-forecast")
const tomorrow = document.querySelector("#tomorrow");
const overmorrow = document.querySelector("#overmorrow");

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.336111&lon=-121.890556&units=metric&appid=db7ee3dc0b03b0fd8e6459528a129323";
const currentWeatherUrl =  "https://api.openweathermap.org/data/2.5/weather?lat=37.336111&lon=-121.890556&units=metric&appid=db7ee3dc0b03b0fd8e6459528a129323";



async function currentApiFetch() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();

            const date = new Date();
            weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherIcon.setAttribute("alt", data.weather[0].main);
            weatherDescription.textContent = `${data.weather[0].description}`;
            currentTemp.innerHTML = `${Math.round(data.main.temp)}&#176;C`;
            todayForecast.innerHTML = `${Math.round((data.main.temp_min + data.main.temp_max)/2)}&#176;C`

            
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

            const tomorrow3pm = new Date(data.list[3].dt_txt);
            // console.log(tomorrow3pm);
            const tomorrowDay = getDay(tomorrow3pm);
            tomorrow.innerHTML = `${tomorrowDay}: <strong>${Math.round(data.list[3].main.temp)}&#176;C</strong>`;

            const overmorrow3pm = new Date(data.list[11].dt_txt);
            // console.log(overmorrow3pm);
            const overmorrowDay = getDay(overmorrow3pm);
            overmorrow.innerHTML = `${overmorrowDay}: <strong>${Math.round(data.list[11].main.temp)}&#176;C</strong>`;
            // console.log(data)
            
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
    return day;
}