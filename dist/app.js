let menuBtn = document.getElementById("toggle");

let nav = document.getElementById("menu-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    menuBtn.children[0].src = "./images/icon-close.svg";
  } else {
    menuBtn.children[0].src = "./images/icon-hamburger.svg";
  }
});
