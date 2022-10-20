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

categoryMenu.forEach((level) => {
  level.addEventListener("click", () => {
    showCategoryMenu(level);
  });
  level.addEventListener("mouseover", () => {
    showCategoryMenu(level);
  });
});

document.body.onscroll = () => {
  new bootstrap.Dropdown(menuHomeToggler);
  let menuInstance = bootstrap.Dropdown.getInstance(menuHomeToggler);
  menuInstance.hide();
};
