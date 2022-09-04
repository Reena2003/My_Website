

var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotatevalue = circle.style.transform;
var rotatesum;
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.visibility = visible;


    }
    else {
        nav.removeAttribute("style");
    }
}
upbtn.onclick = function () {
    rotatesum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;

}
downbtn.onclick = function () {
    rotatesum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}