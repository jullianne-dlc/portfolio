// JavaScript source code


    document.addEventListener("DOMContentLoaded", function() {
      // Function to apply the fade-in effect
      const applyFadeIn = function(div) {
        const img = div.querySelector("img");
        if (img.complete) {
          div.classList.add("fadein-active");
        }
      };

      // Fade-in effect for elements with .fadein class
      const fadeElements = document.querySelectorAll(".fadein");

      fadeElements.forEach(function(element) {
        applyFadeIn(element);

        const img = element.querySelector("img");
        if (img) {
          img.addEventListener("load", function() {
            applyFadeIn(element);
          });
        }
      });
    });