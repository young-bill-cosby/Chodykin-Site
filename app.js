const THUMBNAILS = document.querySelectorAll(".thumbs img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");

THUMBNAILS.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    POPUP.classList.remove("hidden");
  });
});
POPUP_CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});
