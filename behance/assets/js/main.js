// Menu toggle
const menu = document.querySelector(".menu");
const list_menu = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  list_menu.classList.toggle("showmenu");
});
