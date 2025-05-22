const directory = document.querySelector("#directory-cards");
const url = "../chamber/data/members.json"

async function fetchMembers() {
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const content = document.createElement("div");
        const logo = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");

        card.setAttribute("class", "member-card");
        content.setAttribute("class", "member-card-content");
        logo.setAttribute("src", `images/${member.imagename}`);
        logo.setAttribute("alt", `${member.name} Logo`);

        name.textContent = member.name;
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;
        phone.innerHTML = `<strong>Phone:</strong> ${member.phonenumber}`;
        url.innerHTML = `<strong>Website:</strong> ${member.url}`;
        
        content.appendChild(logo);
        content.appendChild(address);
        content.appendChild(phone);
        content.appendChild(url);

        card.appendChild(name);
        card.appendChild(content);

        directory.appendChild(card);
    });
}


fetchMembers();