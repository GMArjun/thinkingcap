let menuHomeToggler = document.querySelector(
  ".category-menu > .dropdown-toggle"
);
let menuAllLevelToggler = document.querySelectorAll(
  "header .dropend .dropdown-toggle"
);

let categoryMenu = [menuHomeToggler, ...menuAllLevelToggler];

let showCategoryMenu = (level) => {
  new bootstrap.Dropdown(level);
  let menuInstance = bootstrap.Dropdown.getInstance(level);
  menuInstance.show();
};

menuHomeToggler.addEventListener("shown.bs.dropdown", (event) => {
  const main = document.querySelector("main");
  const overlay = document.createElement("div");
  overlay.classList.add("menu-dropdown-overlay");
  main.appendChild(overlay);
  overlay.addEventListener("mouseover", () => {
    new bootstrap.Dropdown(menuHomeToggler);
    let menuInstance = bootstrap.Dropdown.getInstance(menuHomeToggler);
    menuInstance.hide();
  });
});

menuHomeToggler.addEventListener("hidden.bs.dropdown", (event) => {
  const main = document.querySelector(".menu-dropdown-overlay");
  main.remove();
});

categoryMenu.forEach((level) => {
  level.addEventListener("click", () => {
    showCategoryMenu(level);
  });
  level.addEventListener("mouseover", () => {
    showCategoryMenu(level);
  });
});
