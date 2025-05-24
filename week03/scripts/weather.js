const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=db7ee3dc0b03b0fd8e6459528a129323";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherIcon.setAttribute("alt", data.weather[0].main)
            figcaption.textContent = `The weather is ${data.weather[0].description}`
            currentTemp.innerHTML = `${data.main.temp}&#176; C`

            console.log(data.weather[0].description)
        } else {
            throw Error(await response.text());
        }
        
    } catch(error) {
        console.log(error);
    }
}

apiFetch();

