let glider;

window.addEventListener("load", () => {
  console.log("main.js");
  initGlider();
  initThumbnailEventListeners();
});

function initGlider() {
  glider = new Glider(document.querySelector(".js-glider"), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
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
      glider.scrollItem(ev.target.parentElement.dataset.index, true);
    })
  );
}
