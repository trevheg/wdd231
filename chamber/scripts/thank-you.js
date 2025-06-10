const thankYou = document.querySelector("#thank-you-confirmation");
const params = new URLSearchParams(window.location.search);

thankYou.innerHTML = `
    <h3>Thank you for applying!</h3>
    <p>Your name: ${params.get("firstName")} ${params.get("lastName")}</p>
    <p>Email: ${params.get("email")}</p>
    <p>Phone: ${params.get("mobilePhone")}</p>
    <p>Organization: ${params.get("orgName")}</p>
    <p>Application sent ${params.get("timestamp")}</p>
    `;
