import { addRow } from "./modules.mjs";
const character = document.querySelector('#character');
const params = new URLSearchParams(window.location.search);

const name = params.get('characterName');
const nameDisplay = document.createElement("h3");
nameDisplay.textContent = name;
character.appendChild(nameDisplay);
console.log(nameDisplay.textContent);

