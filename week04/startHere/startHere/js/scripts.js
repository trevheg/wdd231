// const getString = window.location.search;
// console.log(getString);

// const myInfo = new URLSearchParams(getString);
// console.log(myInfo);

const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);

// console.log(myInfo.get("first"));
// console.log(myInfo.get("last"));
// console.log(myInfo.get("ordinance"));
// console.log(myInfo.get("date"));
// console.log(myInfo.get("location"));
// console.log(myInfo.get("phone"));
// console.log(myInfo.get("email"));

document.querySelector("#results").innerHTML = `
<p>Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>to perform a proxy ${myInfo.get("ordinance")} in the ${myInfo.get("location")} temple</p>
<p>on ${myInfo.get("date")} has been confirmed.</p>
<p>Your phone: ${myInfo.get("phone")}</p>
<p>Your email: ${myInfo.get("email")}</p>
` 