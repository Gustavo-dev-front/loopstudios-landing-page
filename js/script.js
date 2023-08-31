const toggleButton = document.querySelector(".mobile-toggle");
const menu = document.querySelector("#primary-section nav");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
