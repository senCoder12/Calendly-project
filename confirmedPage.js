var dateDay = JSON.parse(localStorage.getItem("dateDay"));
var date = dateDay.date;
var day = dateDay.day;
var time = dateDay.time;
document.querySelector("#date").innerText = date;
document.querySelector("#day").innerText = day;
document.querySelector("#time").innerText = time;
document.querySelector("#finalTime").innerText = time.split(":")[0];
document.querySelector("#ampm").innerText = time.split("0")[time.split("0").length-1];

var credentials = JSON.parse(localStorage.getItem("credentials"));
document.getElementById("Ename").innerText = credentials[credentials.length - 1].Ename;

// var nameEmail = JSON.parse(localStorage.getItem("nameEmail"));
// var fullName = nameEmail.name;
// document.querySelector("#name").innerText = fullname;

document.querySelector(".home").addEventListener("click",function(){
    window.open("./index.html","_self");
})