window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealtop < windowheight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

document.getElementById("proSet").addEventListener("click", design);
var pro = document.getElementById("container");
function design() {
  if (pro.style.display == "none") {
    pro.style.display = "flex";
  } else {
    pro.style.display = "none";
  }
}

if(localStorage.getItem("sign-Up")) {
    document.querySelector("#logInBtn").style.display = "none";
}

function homePage() {
    if(localStorage.getItem("sign-Up")) {
        window.open("./home.html","_self");
    }
}
