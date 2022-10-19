let menuHomeToggler = document.querySelector(
  ".category-menu > .dropdown-toggle"
);
let menuAllLevelToggler = document.querySelectorAll(
  "header .dropend .dropdown-toggle"
);

let categoryMenu = [menuHomeToggler, ...menuAllLevelToggler];

let showCategoryMenu = (level) => {
  new bootstrap.Dropdown(level);
  let dropdownInstanceAfter = bootstrap.Dropdown.getInstance(level);
  dropdownInstanceAfter.show();
};

categoryMenu.forEach((level) => {
  level.addEventListener("click", () => {
    showCategoryMenu(level);
  });
  level.addEventListener("mouseover", () => {
    showCategoryMenu(level);
  });
});
