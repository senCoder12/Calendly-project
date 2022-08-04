
var credentials = JSON.parse(localStorage.getItem("credentials"));  

window.onload = function(){
    // var nameEmail = JSON.parse(localStorage.getItem("nameEmail"));
    // var fullName = nameEmail.name;
    // var fullEmail = nameEmail.email;
    // var getMail = fullEmail.split("@")[0];
    // document.getElementById("nameFirstLater").innerText = fullName[0].toUpperCase; 
    // document.getElementById("firstLa").innerText = fullName[0].toUpperCase; 
    // document.getElementById("name").innerText = fullName;
    // document.querySelector("#email").innerText = `calendly.com/${getMail}`;

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
            <input type="checkbox" name="" class="checking" onclick="deleteMeeting(${index})">
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
    if(document.getElementById("popup").style.display=="block") {
        document.getElementById("popup").style.display = "none";
    }else {
        document.getElementById("popup").style.display = "block";
    }
}

function deleteMeeting(i) {
    var addBorder = event.target.parentNode.parentNode;
    var opacityLess = event.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

    if(document.querySelectorAll(".checking")[i].checked == false){
        document.querySelector(".section-7").style.display = "none"
        addBorder.removeAttribute("class");
        opacityLess.removeAttribute("class");
    }else {
        addBorder.setAttribute("class","border-blue");
        opacityLess.setAttribute("class","opacityLess");
        document.querySelector(".section-7").style.display = "flex"
        document.getElementById("deleteIcon").addEventListener("click",function(){
            deleteNode(i);
        });
        document.querySelector(".adjust").addEventListener("click",function(){
            document.querySelector(".section-7").style.display = "none";
            document.querySelectorAll(".checking")[i].checked = false;
            addBorder.removeAttribute("class");
            opacityLess.removeAttribute("class");
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

var to = null;
$("#abc").on("keyup",function() {
    if(to !== null) clearTimeout(to);
    to = setTimeout(function(){
        filterMeeting();
       to = null;
    }, 1000);
})

function filterMeeting() {
    var filterName = document.getElementById("abc").value;
    console.log(filterName)
    var filterArr = credentials.filter(function(elm) {
        return elm.Ename == filterName || elm.type == filterName;
    })
    displayMeeting(filterArr);
    if(filterName=="") displayMeeting(credentials);
}