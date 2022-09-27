const navBtn = document.getElementById("navbar-button");
const nav = document.getElementById("navbar-list");
const navbar = document.getElementById("navbar");
let show = false;
navBtn.onclick = function () {
  if (!show) {
    navBtn.classList.remove("fa-bars");
    navBtn.classList.add("fa-times");
    navBtn.classList.add("text-red-500");
    nav.classList.remove("hidden");
    nav.classList.add("flex");
    show = true;
  } else {
    navBtn.classList.add("fa-bars");
    navBtn.classList.remove("fa-times");
    navBtn.classList.remove("text-red-500");
    nav.classList.add("hidden");
    nav.classList.remove("flex");
    show = false;
  }
};
