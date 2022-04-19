let swiper;

window.addEventListener("load", () => {
  console.log("main.js");
  initSwiper();
  initThumbnailEventListeners();
});

function initSwiper() {
  // glider = new Glider(document.querySelector(".js-glider"), {
  //   slidesToScroll: 1,
  //   slidesToShow: 1,
  //   draggable: true,
  //   dots: ".dots",
  //   arrows: {
  //     prev: ".glider-prev",
  //     next: ".glider-next",
  //   },
  // });
  swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document
    .querySelector(".js-slideshow-close-button")
    .addEventListener("click", () => {
      document.body.classList.remove("slideshow-open");
    });
}

function initThumbnailEventListeners() {
  const thumbnails = document.querySelectorAll(".js-glider-thumbnail");
  thumbnails.forEach((thumbnail) =>
    thumbnail.addEventListener("click", (ev) => {
      document.body.classList.add("slideshow-open");
      console.log(ev.target.parentElement.dataset.index);
      const index = ev.target.parentElement.dataset.index;
      swiper.slideTo(index, 0);
      console.log(swiper.activeIndex);
      // glider.scrollItem(ev.target.parentElement.dataset.index, true);
    })
  );
}
