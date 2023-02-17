let shareShow = document.querySelector(".main__contact--share");
let shareHide = document.querySelector(".links--share")
let container = document.querySelector(".main__contact__socials");

shareShow.addEventListener("mouseenter", function (e) {
  e.stopPropagation()
  container.classList.add("expand");
});

shareHide.addEventListener("mouseleave", function (e) {
  e.stopPropagation();
  container.classList.remove("expand");
});
