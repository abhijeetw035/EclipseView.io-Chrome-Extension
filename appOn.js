(function () {
  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

  let media = document.querySelectorAll(
    "img, video, picture, svg, canvas, iframe, media, overlay "
  );

  media.forEach((element) => {
    element.style.filter = "invert(1) hue-rotate(180deg)";
  });
})();
