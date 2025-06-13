const membershipButton = document.querySelector("#membershipButton");
const dialogBox = document.querySelector("#membershipInfoDialog");
const closeButton = document.querySelector("#membershipInfoCloseButton");
const membershipInfo = document.querySelector("#membershipInfoDialog div");

membershipButtonGold.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = `
    <p>Gold members get:</p>
    <ul>
        <li>A listing in the membership directory</li>
        <li>A chance of being featured in the "spotlight" listing</li>
        <li>A reserved berth at the docks</li>
    </ul>
    `;
})
membershipButtonSilver.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = `
    <p>Silver members get:</p>
    <ul>
        <li>A listing in the membership directory</li>
        <li>A chance of being featured in the "spotlight" listing</li>
    </ul>
    `;
})
membershipButtonBronze.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = `
    <p>Bronze members get:</p>
    <ul>
        <li>A listing in the membership directory</li>
    </ul>
    `;
})
membershipButtonNP.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = `
    <p>Non-profit members get:</p>
    <ul>
        <li>A listing in the membership directory</li>
    </ul>
    `;
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})

document.querySelector("form").addEventListener("submit", () => {
    document.querySelector("#timestamp").value = new Date;
})
