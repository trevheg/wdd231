const interest = document.querySelector("#items-of-interest");
const url = "../chamber/data/discover.json";

async function fetchItems() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.places);
    displayItems(data.places);
}

// create the card for each place and add it to the document
const displayItems = (places) => {
    places.forEach(place => {
        const card = document.createElement("section");
        card.setAttribute("class", "interest-card");

        // add a title to the place
        const name = document.createElement("h2");
        name.textContent = place.name;
        card.appendChild(name);

        // add the image
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src =  `images/${place.photo}`;
        img.alt = place.name
        figure.appendChild(img);
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = place.name;
        figure.appendChild(figcaption);
        card.appendChild(figure);

        //add the address
        const address = document.createElement("address");
        address.innerHTML = `${place.address}`;
        card.appendChild(address);

        // add the description
        const description = document.createElement("p");
        description.innerHTML = place.description;
        card.appendChild(description);

        // add a "learn more" button
        const learnMore = document.createElement("button");
        learnMore.textContent = "Learn More";
        card.appendChild(learnMore);
        

        interest.appendChild(card);
    });
}

fetchItems();