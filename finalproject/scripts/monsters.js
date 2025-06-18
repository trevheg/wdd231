const monsterTiles = document.querySelector("#monster-tiles");
const dndApiUrl = "https://www.dnd5eapi.co/api/2014/";
const monstersUrl = "https://www.dnd5eapi.co/api/2014/monsters";
const mainUrl = "https://www.dnd5eapi.co";

import {fetchData} from "./modules.mjs";


fetchData(monstersUrl)
    .then(data => {
        console.log(data.results)
        data.results.forEach(monster => {


            const openButton = document.createElement("button");
            openButton.textContent = monster.name;
            openButton.setAttribute("class", "open-button")
            const dialog = document.createElement("dialog");
            const closeButton = document.createElement("button");
            closeButton.setAttribute("class", "close-button")
            closeButton.textContent = "Close"

            openButton.addEventListener("click", () => {
                dialog.showModal();
                console.log(mainUrl + monster.url)
                fetchData(mainUrl + monster.url)
                    .then(monster => {
 
                        const image = document.createElement("img");
                        image.src = mainUrl + monster.image; 
                        image.loading = "lazy";
                        image.alt = monster.name;
                        dialog.appendChild(image);

                        const table = document.createElement("table");

                        const nameRow = document.createElement("tr");
                        const nameq = document.createElement("td");
                        const namea = document.createElement("td");
                        nameq.textContent = "Name: ";
                        namea.textContent = monster.name;
                        nameRow.appendChild(nameq);
                        nameRow.appendChild(namea);
                        table.appendChild(nameRow);

                        const sizeRow = document.createElement("tr");
                        const sizeq = document.createElement("td");
                        const sizea = document.createElement("td");
                        sizeq.textContent = "Size: ";
                        sizea.textContent = monster.size;
                        sizeRow.appendChild(sizeq);
                        sizeRow.appendChild(sizea);
                        table.appendChild(sizeRow);

                        const typeRow = document.createElement("tr");
                        const typeq = document.createElement("td");
                        const typea = document.createElement("td");
                        typeq.textContent = "Type: ";
                        typea.textContent = monster.type;
                        typeRow.appendChild(typeq);
                        typeRow.appendChild(typea);
                        table.appendChild(typeRow);
                    

                        dialog.appendChild(table);
                        dialog.appendChild(closeButton);

                    }).catch(error => console.error(error));                
            })
            closeButton.addEventListener('click', () => {
                dialog.close();
            })

            monsterTiles.appendChild(openButton);
            monsterTiles.appendChild(dialog);

        });



    }).catch(error => console.error(error));

