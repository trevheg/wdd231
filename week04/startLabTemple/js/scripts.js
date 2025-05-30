import {temples} from "../data/temples.js";
// console.log(temples);

import {url} from '../data/temples.js';
// console.log(url);

const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const templeTitle = document.querySelector("#mydialog h2");
const templeCloseButton = document.querySelector("#mydialog button");
const templeDetails = document.querySelector("#mydialog p");
const templeTitleDiv = document.querySelector("#mydialog div");

templeCloseButton.addEventListener("click", () => mydialog.close());

function displayItems(data) {
    // console.log(data);
    data.forEach(item => {
        // console.log(item)
        const photo = document.createElement("img");
        photo.src = `${url}${item.path}`
        photo.alt = item.name;
        photo.addEventListener("click", () => showInfo(item));
        showHere.appendChild(photo)
    });
}
displayItems(temples);

function showInfo(item) {
    templeTitle.innerHTML = item.name;
    templeDetails.innerHTML = `The ${item.name} was dedicated in ${item.dedicated} by ${item.person} as temple #${item.number}.`;
    mydialog.showModal();
}