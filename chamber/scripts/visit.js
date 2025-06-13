const visit = document.querySelector("#visit");
const dateToday = new Date();

const lastVisitDate = new Date (JSON.parse(localStorage.getItem("lastVisitDate")));
// console.log(lastVisitDate);

const daysSince = Math.floor((dateToday - lastVisitDate) / (1000 * 60 * 60 * 24));

// console.log(daysSince);

localStorage.setItem("lastVisitDate", JSON.stringify(dateToday));

if (lastVisitDate.getTime() == 0 || lastVisitDate == null) {
    visit.innerHTML = "Welcome! Let us know if you have any questions."
} else if (daysSince == 0) {
    visit.innerHTML = "Back so soon! Awesome!"
} else {
    visit.innerHTML = `You last visited ${daysSince} days ago.`
}
