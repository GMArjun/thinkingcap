var swiper = new Swiper("#popular-subjects", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-top-next",
    prevEl: ".swiper-button-top-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 6,
    },
  },
});
