let searchBar = document.querySelector(".header-search-bar");
let searchButton = document.querySelector(".header-search-bar .search-btn");
let searchClose = document.querySelector(".header-search-bar .close-btn");

searchButton.addEventListener("click", function (e) {
  searchBar.classList.add("open");
});

searchClose.addEventListener("click", function (e) {
  searchBar.classList.remove("open");
});
