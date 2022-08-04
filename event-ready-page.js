var credentials = JSON.parse(localStorage.getItem("credentials"));
document.getElementById("Ename-header").innerText = credentials[credentials.length - 1].Ename;
document.getElementById("Ename-link").innerText = credentials[credentials.length - 1].Ename;
document.getElementById("location-header").innerText = credentials[credentials.length - 1].location;
