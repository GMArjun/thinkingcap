var swiper = new Swiper("#popular-subjects", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slide-top-next",
    prevEl: ".slide-top-prev",
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

let courseSliders = [1, 2, 3];

courseSliders.forEach((i) => {
  new Swiper(`#courses-collection-${i}`, {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: `.course-slide-control-next-${i}`,
      prevEl: `.course-slide-control-prev-${i}`,
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
        slidesPerView: 4,
      },
    },
  });
});
