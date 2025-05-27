const spotlight = document.querySelector("#spotlight");
const url = "../chamber/data/members.json"

async function fetchMembers() {
    
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data.members);
    // filter the members list to only members with silver or gold membership
    const silverGold = data.members.filter((member) => {
        return member.membershiplevel > 1;
    }) 


    // pick three random members to display
    while (silverGold.length > 3) {
        index = Math.floor(Math.random() * silverGold.length);
        // console.log(index);
        silverGold.splice(index, 1);
    }


    displayMembers(silverGold);
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
        const membershipLevel = document.createElement("p");

        card.setAttribute("class", "member-card");
        content.setAttribute("class", "member-card-content");
        logo.setAttribute("src", `images/${member.imagename}`);
        logo.setAttribute("alt", `${member.name} Logo`);

        name.textContent = member.name;
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;
        phone.innerHTML = `<strong>Phone:</strong> ${member.phonenumber}`;
        url.innerHTML = `<strong>Website:</strong> ${member.url}`;
        if (member.membershiplevel == 2) {
            membershipLevel.innerHTML = `<strong>Membership Level: </strong> Silver`;
        } else if (member.membershiplevel == 3) {
            membershipLevel.innerHTML = `<strong>Membership Level: </strong> Gold`;
        }
        
        content.appendChild(logo);
        content.appendChild(address);
        content.appendChild(phone);
        content.appendChild(url);
        content.appendChild(membershipLevel);

        card.appendChild(name);
        card.appendChild(content);

        spotlight.appendChild(card);
    });
}


fetchMembers();