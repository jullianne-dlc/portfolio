// JavaScript source code

document.addEventListener("DOMContentLoaded", function() {
  // Fade-in effect for images with div.fadein
  const fadeDivs = document.querySelectorAll(".image.fadein");

  fadeDivs.forEach(function(div) {
    const img = div.querySelector("img");

    img.addEventListener("load", function() {
      div.classList.add("fadein-active");
    });

    // Check opacity after a set period of time (e.g., 1000ms = 1 second)
    setTimeout(function() {
      if (img.style.opacity === "0") {
        img.style.opacity = "1";
      }
    }, 2000);
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
});
