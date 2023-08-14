// JavaScript source code


//for fading in images with div  fadein
document.addEventListener("DOMContentLoaded", function() {
  const fadeDivs = document.querySelectorAll(".image.fadein");

  fadeDivs.forEach(function(div) {
    const img = div.querySelector("img");

    img.addEventListener("load", function() {
      div.classList.add("fadein-active");
    });
  });
});


//for fixing menu button functionality on mobile
document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menu-button");
  const menu = document.querySelector(".menu");

  menuButton.addEventListener("click", function() {
    menu.classList.toggle("menu-button-active");
  });

  // Close the dropdown menu when clicking outside
  document.addEventListener("click", function(event) {
    if (!menu.contains(event.target)) {
      menu.classList.remove("menu-button-active");
    }
  });
});