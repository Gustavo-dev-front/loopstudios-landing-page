const toggleButton = document.querySelector(".mobile-toggle");
const menu = document.querySelector("#primary-section");

function checkActive() {
  if (menu.classList.contains("nav-active")) {
    toggleButton.querySelector("img").src = "../images/icon-close.svg";
  } else {
    toggleButton.querySelector("img").src = "../images/icon-hamburger.svg";
  }
}

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("nav-active");
  checkActive();
});

checkActive();
