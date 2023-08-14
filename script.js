// JavaScript source code

document.addEventListener("DOMContentLoaded", function() {
  // Get all images with the fade-in-image class
  const images = document.querySelectorAll(".image");

  // Add a class to trigger the fade-in animation for each image
  images.forEach(function(image) {
    image.classList.add("fade-in");
  });
});