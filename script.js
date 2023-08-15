// JavaScript source code


        // Function to apply the fade-in effect
        const applyFadeIn = function(div) {
          const img = div.querySelector("img");
          if (img.complete) {
            div.classList.add("fadein-active");
          }
        };

        // Apply fade-in effect when the page loads
        document.addEventListener("DOMContentLoaded", function() {
          const fadeDivs = document.querySelectorAll(".image.fadein");
          fadeDivs.forEach(function(div) {
            applyFadeIn(div);

            const img = div.querySelector("img");
            img.addEventListener("load", function() {
              applyFadeIn(div);
            });
          });
        });

        // Apply fade-in effect again when the page becomes active
        document.addEventListener("visibilitychange", function() {
          if (!document.hidden) {
            const fadeDivs = document.querySelectorAll(".image.fadein");
            fadeDivs.forEach(function(div) {
              applyFadeIn(div);
            });
          }
        });


});
