// JavaScript source code

document.addEventListener("DOMContentLoaded", function() {
  const fadeDivs = document.querySelectorAll(".image.fadein");

  fadeDivs.forEach(function(div) {
    const img = div.querySelector("img");

    img.addEventListener("load", function() {
      div.classList.add("fadein-active");
    });
  });
});