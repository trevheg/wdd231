import { fetchData } from "./modules.mjs";
const equipmentDiv = document.querySelector("#spells");
const mainUrl = "https://www.dnd5eapi.co";
const spellsUrl = "https://www.dnd5eapi.co/api/2014/spells";


fetchData(spellsUrl)
    .then(data => {
        data.results.forEach(spell => {

            const openButton = document.createElement("button");
            openButton.textContent = spell.name;
            openButton.setAttribute("class", "open-button")
            const dialog = document.createElement("dialog");
            const closeButton = document.createElement("button");
            closeButton.setAttribute("class", "close-button");
            closeButton.textContent = "Close";

            openButton.addEventListener("click", () => {
                dialog.showModal();

                fetchData(mainUrl + spell.url)
                    .then(spell => {
                        const table  = document.createElement("table");
 
                        const addRow = (q, a) => {
                            const row = document.createElement("tr");
                            const first = document.createElement("td");
                            const second = document.createElement("td");                        
                            first.innerHTML = q;
                            second.innerHTML = a;
                            row.appendChild(first);
                            row.appendChild(second);
                            table.appendChild(row);
                        }

                        addRow("Name: ", spell.name);
                        addRow('Description: ', spell.desc );
                        addRow('Components: ', spell.components);
                        const spellLevel = () => {
                            if (spell.level == 0) {
                                return "Cantrip";
                            } else {
                                return spell.level;
                            }
                        }
                        addRow("Level: ", spellLevel());
                        const classes = () => {
                            let cs = '';
                            spell.classes.forEach(c => {
                                cs += c.name + ' ';
                            });
                                return cs;
                        }
                        addRow("Classes: ", classes())

                        dialog.appendChild(table);
                        dialog.appendChild(closeButton);
                    }).catch(error => console.error(error)); 
            })

            closeButton.addEventListener('click', () => dialog.close());

            equipmentDiv.appendChild(openButton);
            equipmentDiv.appendChild(dialog);


        });



}).catch(error => console.error(error));
