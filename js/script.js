let header = document.querySelector(".header .container")
let toogleMenu = document.querySelector(".toogle-menue")


toogleMenu.onclick = () => {
  header.classList.toggle("active")
}

let myLink = document.querySelector(".header .links")
myLink.onclick = () => {
    header.classList.remove("active")
}

let goingToTopBtn = document.querySelector(".going-to-top")
const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight - 20
    ? goingToTopBtn.classList.add("show")
    : goingToTopBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  slideIndex++;
}

setInterval(function () {
  showSlides(slideIndex);
}, 5000);

