document
  .getElementsByClassName("nxtBtn")[0]
  .addEventListener("click", goforward);
document
  .getElementsByClassName("nxtBtn")[1]
  .addEventListener("click", goforward);

var nameEmail = JSON.parse(localStorage.getItem("sign-Up"));
var fullName = nameEmail[nameEmail.length - 1].name;
document.getElementById(
  "passLetter"
).innerText = `${fullName[0].toUpperCase()}`;

var credentials = JSON.parse(localStorage.getItem("credentials")) || [];

document.getElementById("name").addEventListener("keyup", typeLink);
function typeLink() {
  var Ename = document.getElementById("name").value;
  document.getElementById("Ename-header").innerText = Ename;
  document.getElementById("eventLink").value = Ename;
  document.getElementById("location-header").innerHTML = "";
}
function updateLocation() {
  var location = document.getElementById("location").value;
  document.getElementById("location-header").innerHTML = `, ${location}`;
}

function goforward() {
  var Ename = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  for (var i = 0; i < credentials.length; i++) {
    if (credentials[i].Ename == Ename) return;
  }
  var eventLink = document.getElementById("eventLink").value;
  if (Ename == "" && eventLink == "") {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("eventLink").style.borderColor = "red";
    // alert("Please provide Event name");
  } else if (eventLink == "") {
    document.getElementById("eventLink").style.borderColor = "red";
    // alert("Please provide Location name");
  } else if (Ename == "") {
    document.getElementById("name").style.borderColor = "red";
  } else {
    var obj = { Ename: Ename, location: location, type: "One-on-One" };
    credentials.push(obj);
    localStorage.setItem("credentials", JSON.stringify(credentials));
    window.open("./event-ready-page.html", "_self");
  }
  document.getElementById("name").value = "";
  document.getElementById("location").value = "";
  document.getElementById("eventLink").value = "";
  document.getElementById("Ename-header").innerText = "";
  document.getElementById("location-header").innerHTML = " No location given";
}
