const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButtonApples.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One apple contains 95 calories`
})
openButtonOranges.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One orange contains 45 calories`
})
openButtonBananas.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One banana contains 105 calories`
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})