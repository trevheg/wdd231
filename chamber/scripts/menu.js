const menuButton = document.querySelector("#menu-button");
const aniNav = document.querySelector("#animate-navigation")
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    aniNav.classList.toggle("open");
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})