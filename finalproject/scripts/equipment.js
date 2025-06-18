import { fetchData } from "./modules.mjs";
const equipmentDiv = document.querySelector("#equipment");
const mainUrl = "https://www.dnd5eapi.co";
const equipmentUrl = "https://www.dnd5eapi.co/api/2014/equipment";


fetchData(equipmentUrl)
    .then(data => {
        console.log(data.results)
        data.results.forEach(equipment => {

            const openButton = document.createElement("button");
            openButton.textContent = equipment.name;
            openButton.setAttribute("class", "open-button")
            const dialog = document.createElement("dialog");
            const closeButton = document.createElement("button");
            closeButton.setAttribute("class", "close-button");
            closeButton.textContent = "Close";

            openButton.addEventListener("click", () => {
                dialog.showModal();




                
            })

            equipmentDiv.appendChild(openButton);
            equipmentDiv.appendChild(dialog);


        });



}).catch(error => console.error(error));
