const allNavTogglers = [
  ...document.querySelectorAll(
    ".category-menu > .dropdown-toggle, .auth-dropdowns .dropdown-toggle"
  ),
];
const allHeaderTogglers = document.querySelectorAll("header .dropdown-toggle");
const allHeaderDropdowns = document.querySelectorAll("header .dropdown-menu");

let dropdownVisibilty = (handler, toggle) => {
  new bootstrap.Dropdown(handler);
  let menuInstance = bootstrap.Dropdown.getInstance(handler);
  toggle == "show" ? menuInstance.show() : menuInstance.hide();
};

allHeaderTogglers.forEach((handler) => {
  ["click", "mouseover"].forEach((event) => {
    handler.addEventListener(event, (ev) => {
      ev.stopPropagation();
      dropdownVisibilty(handler, "show");
    });
  });
});

allHeaderDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", (ev) => ev.stopPropagation());
});

allNavTogglers.forEach((handler) => {
  handler.addEventListener("shown.bs.dropdown", () => {
    document.body.addEventListener("mouseover", () => {
      dropdownVisibilty(handler, "hide");
    });
    let prevDropdowns = allNavTogglers.filter((item) => item !== handler);
    prevDropdowns.forEach((ele) => dropdownVisibilty(ele, "hide"));
  });
});
