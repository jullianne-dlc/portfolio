// JavaScript source code

document.addEventListener("DOMContentLoaded", function() {
  // Function to apply the fade-in effect
  const applyFadeIn = function(div, img) {
    if (img.style.opacity === "0") {
      div.classList.add("fadein-active");
      clearInterval(fadeInterval); // Stop checking once the fade-in effect is applied
    }
  };

  // Fade-in effect for images with div.fadein
  const fadeDivs = document.querySelectorAll(".image.fadein");

  fadeDivs.forEach(function(div) {
    const img = div.querySelector("img");

    img.addEventListener("load", function() {
      applyFadeIn(div, img);
    });
  });

  // Check for 0 opacity every 1 second
  const fadeInterval = setInterval(function() {
    fadeDivs.forEach(function(div) {
      const img = div.querySelector("img");
      applyFadeIn(div, img);
    });
  }, 1000);
});

  //not working, removing in the meantime
  // Menu button functionality for mobile
  //const menuButton = document.getElementById("menu-button");
  //const menu = document.querySelector(".menu");

  //menuButton.addEventListener("click", function() {
  //  menu.classList.toggle("menu-button-active");
  //});

  // Close the dropdown menu when clicking outside
  //document.addEventListener("click", function(event) {
  //  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
  //    menu.classList.remove("menu-button-active");
  //  }
  //});

