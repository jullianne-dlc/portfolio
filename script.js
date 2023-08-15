// JavaScript source code


    document.addEventListener("DOMContentLoaded", function() {
      // Function to apply the fade-in effect
      const applyFadeIn = function(div) {
        const img = div.querySelector("img");
        if (img.complete) {
          div.classList.add("fadein-active");
        }
      };

      // Fade-in effect for images with div.fadein
      const fadeDivs = document.querySelectorAll(".image.fadein");

      fadeDivs.forEach(function(div) {
        applyFadeIn(div);

        const img = div.querySelector("img");
        img.addEventListener("load", function() {
          applyFadeIn(div);
        });
      });
    });


});
