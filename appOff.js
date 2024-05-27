(function () {
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
  
    let media = document.querySelectorAll(
      "img, video, picture, svg, canvas, iframe"
    );
  
    media.forEach((element) => {
      element.style.filter = "invert(0) hue-rotate(0deg)";
    });
  })();
  