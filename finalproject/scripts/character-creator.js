import { fetchData } from "./modules.mjs";
const raceSelect = document.querySelector("#race");
const racesUrl = "https://www.dnd5eapi.co/api/2014/races";
const mainUrl = "https://www.dnd5eapi.co";

fetchData(racesUrl)
    .then(data => {
        data.results.forEach(race => {
            const raceName = document.createElement("option");
            raceName.value = race.index;
            raceName.textContent = race.name;
            raceSelect.appendChild(raceName)
        })
    }).catch(error => console.error(error));




