document.querySelectorAll(".clickBtn")[0].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[1].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[2].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[3].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[4].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[5].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[6].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[7].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[8].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[9].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[10].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[11].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[12].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[13].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[14].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[15].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[16].addEventListener("click",sendDate);
document.querySelectorAll(".clickBtn")[17].addEventListener("click",sendDate);


var credentials = JSON.parse(localStorage.getItem("credentials"));
document.getElementById("Ename").innerText = credentials[credentials.length - 1].Ename;

function sendDate() {
    var date = Number(event.path[0].innerText);
    var day;
    if(date % 7 == 1) {
        day = "Monday";
    }else if(date % 7 == 2) {
        day = "Tuesday";
    } else if(date % 7 == 3) {
        day = "Wednesday";
    } else if (date % 7 == 4) {
        day = "Thursday";
    } else if(date % 7 == 5) {
        day = "Friday";
    }
    var obj = {date : date , day : day};
    localStorage.setItem("dateDay", JSON.stringify(obj));
    window.open("./calender.html","_self");
}