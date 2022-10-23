let categoryToggler = document.querySelector(
  ".category-menu > .dropdown-toggle"
);
let categoryLevelToggler = document.querySelectorAll(
  "header .dropend .dropdown-toggle"
);

let categoryMenu = [categoryToggler, ...categoryLevelToggler];

let dropdownToggler = (handler, toggle) => {
  new bootstrap.Dropdown(handler);
  let menuInstance = bootstrap.Dropdown.getInstance(handler);
  toggle == "show" ? menuInstance.show() : menuInstance.hide();
};

categoryMenu.forEach((handler) => {
  ["click", "mouseover"].forEach((event) => {
    handler.addEventListener(event, () => {
      dropdownToggler(handler, "show");
    });
  });
});

["shown.bs.dropdown", "hidden.bs.dropdown"].forEach((event, index) => {
  categoryToggler.addEventListener(event, () => {
    if (index == 0) {
      const overlay = document.createElement("div");
      overlay.classList.add("drop-overlay");
      document.body.insertAdjacentElement("beforeend", overlay);
      overlay.addEventListener("mouseover", () =>
        dropdownToggler(categoryToggler, "hide")
      );
    } else {
      const overlay = document.querySelector(".drop-overlay");
      overlay.remove();
    }
  });
});
