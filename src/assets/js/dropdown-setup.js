const categoryToggler = document.querySelector(
  ".category-menu > .dropdown-toggle"
);

const authNavToggler = document.querySelectorAll(
  ".auth-dropdowns .dropdown-toggle"
);

let combinedNavTogglers = [categoryToggler, ...authNavToggler];

const allHeaderTogglers = document.querySelectorAll("header .dropdown-toggle");

let dropdownToggler = (handler, toggle) => {
  new bootstrap.Dropdown(handler);
  let menuInstance = bootstrap.Dropdown.getInstance(handler);
  toggle == "show" ? menuInstance.show() : menuInstance.hide();
};

allHeaderTogglers.forEach((handler) => {
  ["click", "mouseover"].forEach((event) => {
    handler.addEventListener(event, () => {
      dropdownToggler(handler, "show");
    });
  });
});

combinedNavTogglers.forEach((handler, handlerIndex) => {
  ["shown.bs.dropdown", "hidden.bs.dropdown"].forEach((event, eventIndex) => {
    handler.addEventListener(event, () => {
      if (eventIndex == 0) {
        // Logic To Add Overlay when Dropdown is Active
        const overlay = document.createElement("div");
        overlay.classList.add("drop-overlay");
        document.body.insertAdjacentElement("beforeend", overlay);
        overlay.addEventListener("mouseover", () =>
          dropdownToggler(handler, "hide")
        );

        // Logic to Hide Other Opened Active Dropdowns
        let inActiveDropdown = [...combinedNavTogglers].filter(
          (item) => item !== handler
        );
        inActiveDropdown.forEach((item) => {
          dropdownToggler(item, "hide");
        });
      } else {
        // Logic to Remove Overlay
        const overlay = document.querySelector(".drop-overlay");
        overlay.remove();
      }
    });
  });
});
