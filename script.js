let isTouchDevice = 'ontouchstart' in document.documentElement;
let shareShow = document.querySelector(".main__contact--share");
let container = document.querySelector(".main__contact__socials");


if (isTouchDevice) {
  shareShow.addEventListener('click', function() {
    container.classList.toggle('expand');
    console.log("isTouch")
  });
} else {
shareShow.addEventListener("mouseenter", function (e) {
  e.stopPropagation()
  container.classList.add("expand");
});


shareShow.addEventListener("mouseleave", function (e) {
  e.stopPropagation();
  container.classList.remove("expand");
});
}


