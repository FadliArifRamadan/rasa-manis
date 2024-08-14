// Toggle class active untk menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toogle class active untuk seacrh form
const seacrhForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika search diklik
document.querySelector("#search").onclick = (e) => {
  seacrhForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar elemen
const menu = document.querySelector("#menu");
const seacrh = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!search.contains(e.target) && !seacrhForm.contains(e.target)) {
    seacrhForm.classList.remove("active");
  }
});
