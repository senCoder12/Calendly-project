document.querySelectorAll(".getTime")[0].addEventListener("click",timeConfirm);
document.querySelectorAll(".getTime")[1].addEventListener("click",timeConfirm);
document.querySelectorAll(".getTime")[2].addEventListener("click",timeConfirm);
document.querySelectorAll(".getTime")[3].addEventListener("click",timeConfirm);
document.querySelectorAll(".getTime")[4].addEventListener("click",timeConfirm);
document.querySelectorAll(".getTime")[5].addEventListener("click",timeConfirm);


var dateDay = JSON.parse(localStorage.getItem("dateDay"));
document.querySelector("#date").innerText = dateDay.date ;
document.querySelector("#day").innerText = dateDay.day;

for(var i=0;i<document.querySelectorAll(".clickBtn").length;i++) {
    if(Number(document.querySelectorAll(".clickBtn")[i].innerText) == dateDay.date) {
        document.querySelectorAll(".clickBtn")[i].style.backgroundColor = "rgb(75 134 216)"
        document.querySelectorAll(".clickBtn")[i].style.color = "white"
    }
}

var timeConfirmation ; 
function timeConfirm() {
    if(event.path[0].innerText != "Confirm") {
        timeConfirmation = event.path[0].innerText;
        dateDay.time = timeConfirmation;
        localStorage.setItem("dateDay",JSON.stringify(dateDay));
        event.path[0].innerText = "Confirm"
        event.path[0].style.backgroundColor = "rgb(5 73 166)";
        event.path[0].style.borderRadius = "30px";
        event.path[0].style.fontSize= "500";
        event.path[0].style.color= "white";
    }else {
        window.open("internal.html","_self");
    }
    
}