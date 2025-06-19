import { fetchData, addRow } from "./modules.mjs";
const nameSection = document.querySelector('#name');
const raceSection = document.querySelector('#race');
const classSection = document.querySelector('#class');
const backgroundSection = document.querySelector('#background');
const params = new URLSearchParams(window.location.search);
const url = "https://www.dnd5eapi.co/api/2014/";
const mainUrl = "https://www.dnd5eapi.co";

// use this to add bits to the sections
const addThing = (type, text, parent) => {
    const thing = document.createElement(type);
    thing.textContent = text;
    parent.appendChild(thing);
}

const name = params.get('characterName');
addThing("h3", name, nameSection);

fetchData(`${url}races`)
    .then(data => {
        const raceIndex = params.get('race')
        const raceUrl = data.results.find(obj => obj.index === raceIndex).url;
        fetchData(mainUrl + raceUrl)
            .then(data => {

                addThing("h3", data.name, raceSection);
                addThing("p", data.alignment, raceSection);
                addThing("p", data.size_description, raceSection);
                addThing("p", data.language_desc, raceSection);

            }).catch(error => console.error(error));

    }).catch(error => console.error(error));

fetchData(`${url}classes`)
    .then(data => {
        const classIndex = params.get('class')
        const classUrl = data.results.find(obj => obj.index === classIndex).url;
        fetchData(mainUrl + raceUrl)
            .then(data => {

                // addThing("h3", data.name, classSection);
                // addThing("p", data.alignment, classSection);
                // addThing("p", data.size_description, classSection);
                // addThing("p", data.language_desc, classSection);

            }).catch(error => console.error(error));

    }).catch(error => console.error(error));