
var credentials = JSON.parse(localStorage.getItem("credentials"));  

window.onload = function(){
    if(!localStorage.getItem("credentials") || JSON.parse(localStorage.getItem("credentials")).length == 0) {
        var obj =  {Ename : "30 Minute Meeting" , location : null , type : "One-on-One"};
        var cred = [];
        cred.push(obj);
        localStorage.setItem("credentials",JSON.stringify(cred));
    }
    credentials = JSON.parse(localStorage.getItem("credentials"));
    displayMeeting(credentials);
}



var credentials = JSON.parse(localStorage.getItem("credentials"));

function displayMeeting(credentials) {
    var section6 = document.querySelector(".section-6");
    section6.innerHTML = ``;
    credentials.map(function(elm, index){

        var createHtml = document.createElement("div");
        createHtml.innerHTML = 
        `<div>
            <input type="checkbox" name="" id="checking" onclick="deleteMeeting(${index})">
            <i class="fa fa-gear"></i>
        </div>
        <h2>${elm.Ename}</h2>
        <p>30 mins,${elm.type}</p>
        <button class="viewPageBtn"><a href="">View booking page</a></button>
        <div>
            <p><i class="fa fa-copy" style="margin-right: 5px;"></i>Copy Link</p>
            <button>Share</button>
        </div>` 
        section6.append(createHtml);
    })
}
displayMeeting(credentials);

document.querySelector(".popupBtn").addEventListener("click",showPopup);
document.getElementById("popup").style.display = "none";
function showPopup() {
    event.preventDefault();
    console.log("hifi")
    if(document.getElementById("popup").style.display=="block") {
        document.getElementById("popup").style.display = "none";
    }else {
        document.getElementById("popup").style.display = "block";
    }
}

function deleteMeeting(i) {
    if(document.querySelector(".section-7").style.display == "flex"){
        document.querySelector(".section-7").style.display = "none"
    }else {
        document.querySelector(".section-7").style.display = "flex"
        document.getElementById("deleteIcon").addEventListener("click",function(){
            deleteNode(i);
        });
    }
}
function deleteNode(i) {
    credentials.splice(i,1);
    localStorage.setItem("credentials",JSON.stringify(credentials));
    credentials = JSON.parse(localStorage.getItem("credentials"));
    displayMeeting(credentials);
    document.querySelector(".section-7").style.display = "none"
}

