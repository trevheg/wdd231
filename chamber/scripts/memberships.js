const membershipButton = document.querySelector("#membershipButton");
const dialogBox = document.querySelector("#membershipInfoDialog");
const closeButton = document.querySelector("#membershipInfoCloseButton");
const membershipInfo = document.querySelector("#membershipInfoDialog div");

membershipButtonGold.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = "These are the gold membership benefits";
})
membershipButtonSilver.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = "These are the silver membership benefits";
})
membershipButtonBronze.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = "These are the bronze membership benefits";
})
membershipButtonNP.addEventListener("click", () => {
    dialogBox.showModal();
    membershipInfo.innerHTML = "These are the non-profit membership benefits";
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})
