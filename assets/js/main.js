// import Swiper, {
//   SwiperPluginLazyload,
//   SwiperPluginPagination,
// } from "tiny-swiper";

window.addEventListener("load", () => {
  console.log("main.js");
  new Glider(document.querySelector(".js-glider"), {
    slidesToScroll: 1,
    slidesToShow: 5.5,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
