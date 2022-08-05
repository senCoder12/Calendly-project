// var nameEmail = JSON.parse(localStorage.getItem("nameEmail"));
// var fullName = nameEmail.name;
// document.querySelector("#name").innerText = fullname;
var dateDay = JSON.parse(localStorage.getItem("dateDay"));
var date = dateDay.date;
var day = dateDay.day;
var time = dateDay.time;
document.querySelector("#date").innerText = date;
document.querySelector("#day").innerText = day;
document.querySelector("#time").innerText = time;
document.querySelector("#time").innerText = time;


function sendingMail() {
    event.preventDefault();
    var senderName = document.querySelector("#fname").value;
    var senderMail = document.querySelector("#email1").value;
    var sendingMails = [];
    var obj = {name : senderName , email : senderMail};
    sendingMails.push(obj);
    localStorage.setItem("sendingMails", JSON.stringify(sendingMails));
    window.open("./confirmedPage.html","_self");
}