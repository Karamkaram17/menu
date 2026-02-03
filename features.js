/**
 * Image Lightbox feature
 * - Tap to see full-size photo
 * - Back button closes lightbox instead of navigating away
 */

(function () {
  "use strict";

  let lightbox, lightboxImg, lightboxClose;
  let isLightboxOpen = false;

  /**
   * Initialize lightbox functionality
   */
  function init() {
    createLightboxElements();
    attachLightboxListeners();
  }

  /**
   * Create lightbox DOM elements
   */
  function createLightboxElements() {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
        <img class="lightbox-img" src="" alt="Full size image" />
      </div>
    `;
    document.body.appendChild(lightbox);

    lightboxImg = lightbox.querySelector(".lightbox-img");
    lightboxClose = lightbox.querySelector(".lightbox-close");
  }

  /**
   * Attach event listeners for lightbox
   */
  function attachLightboxListeners() {
    // Close button
    lightboxClose.addEventListener("click", closeLightbox);

    // Click on backdrop to close
    lightbox
      .querySelector(".lightbox-backdrop")
      .addEventListener("click", closeLightbox);

    // Keyboard - Escape to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isLightboxOpen) {
        closeLightbox();
      }
    });

    // Handle browser back button
    window.addEventListener("popstate", (e) => {
      if (isLightboxOpen) {
        e.preventDefault();
        closeLightbox(false); // Don't push state again
      }
    });

    // Make category images clickable
    document.addEventListener("click", (e) => {
      const img = e.target.closest(".section-img-main");
      if (img) {
        openLightbox(img.src, img.alt);
      }
    });
  }

  /**
   * Open lightbox with image
   */
  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Full size image";
    lightbox.classList.add("active");
    isLightboxOpen = true;
    document.body.style.overflow = "hidden";

    // Push state so back button closes lightbox instead of navigating away
    history.pushState({ lightbox: true }, "");
  }

  /**
   * Close lightbox
   */
  function closeLightbox(goBack = true) {
    lightbox.classList.remove("active");
    isLightboxOpen = false;
    document.body.style.overflow = "";

    // Go back in history if we pushed a state
    if (goBack && history.state?.lightbox) {
      history.back();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    setTimeout(init, 100);
  }
})();
