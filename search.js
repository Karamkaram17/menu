/**
 * Search functionality for the menu
 * Provides Ctrl+F like search with navigation between results
 */

(function () {
  "use strict";

  // State
  let searchMatches = [];
  let currentMatchIndex = -1;
  let originalContents = new Map();
  let isSearchOpen = false;

  // DOM Elements (will be created)
  let searchBtn,
    searchPanel,
    searchInput,
    resultsInfo,
    prevBtn,
    nextBtn,
    closeBtn;

  /**
   * Initialize the search functionality
   */
  function init() {
    createSearchElements();
    attachEventListeners();
  }

  /**
   * Create and inject search UI elements
   */
  function createSearchElements() {
    // Create floating search button
    searchBtn = document.createElement("button");
    searchBtn.id = "search-btn";
    searchBtn.setAttribute("aria-label", "Open search");
    searchBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    `;

    // Create search panel
    searchPanel = document.createElement("div");
    searchPanel.id = "search-panel";
    searchPanel.innerHTML = `
      <div class="search-container">
        <div class="search-input-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input type="text" id="search-input" placeholder="Search menu items..." autocomplete="off" />
        </div>
        <div class="search-results-info">
          <span class="current">0</span>
          <span>/</span>
          <span class="total">0</span>
        </div>
        <div class="search-nav-buttons">
          <button class="search-nav-btn" id="search-prev" aria-label="Previous result" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
          <button class="search-nav-btn" id="search-next" aria-label="Next result" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
        <button class="search-close-btn" id="search-close" aria-label="Close search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
    `;

    // Append to body
    document.body.appendChild(searchBtn);
    document.body.appendChild(searchPanel);

    // Get references to inner elements
    searchInput = document.getElementById("search-input");
    resultsInfo = searchPanel.querySelector(".search-results-info");
    prevBtn = document.getElementById("search-prev");
    nextBtn = document.getElementById("search-next");
    closeBtn = document.getElementById("search-close");
  }

  /**
   * Attach event listeners
   */
  function attachEventListeners() {
    // Open search
    searchBtn.addEventListener("click", openSearch);

    // Close search
    closeBtn.addEventListener("click", closeSearch);

    // Search input
    searchInput.addEventListener("input", debounce(performSearch, 200));

    // Navigation
    prevBtn.addEventListener("click", () => navigateResults(-1));
    nextBtn.addEventListener("click", () => navigateResults(1));

    // Keyboard shortcuts
    document.addEventListener("keydown", handleKeyDown);

    // Close on escape or click outside
    searchPanel.addEventListener("click", (e) => {
      if (e.target === searchPanel) closeSearch();
    });

    // Watch for up button visibility changes
    watchUpButtonVisibility();
  }

  /**
   * Watch for up button visibility and adjust search button position
   */
  function watchUpButtonVisibility() {
    const upBtn = document.getElementById("up-btn");
    if (!upBtn) return;

    // Initial check
    updateSearchButtonPosition(upBtn);

    // Use MutationObserver to watch for style changes
    const observer = new MutationObserver(() => {
      updateSearchButtonPosition(upBtn);
    });

    observer.observe(upBtn, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // Also check on scroll for immediate response
    window.addEventListener("scroll", () => {
      updateSearchButtonPosition(upBtn);
    });
  }

  /**
   * Update search button position based on up button visibility
   */
  function updateSearchButtonPosition(upBtn) {
    const isUpBtnVisible =
      upBtn.style.display !== "none" &&
      window.getComputedStyle(upBtn).display !== "none";

    if (isUpBtnVisible) {
      searchBtn.classList.add("above-up-btn");
      searchBtn.classList.remove("at-up-btn-position");
    } else {
      searchBtn.classList.remove("above-up-btn");
      searchBtn.classList.add("at-up-btn-position");
    }
  }

  /**
   * Handle keyboard shortcuts
   */
  function handleKeyDown(e) {
    // Ctrl/Cmd + F to open search
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      openSearch();
      return;
    }

    if (!isSearchOpen) return;

    // Escape to close
    if (e.key === "Escape") {
      closeSearch();
      return;
    }

    // Enter or F3 to navigate (Shift for reverse)
    if (e.key === "Enter" || e.key === "F3") {
      e.preventDefault();
      navigateResults(e.shiftKey ? -1 : 1);
    }
  }

  /**
   * Open search panel
   */
  function openSearch() {
    isSearchOpen = true;
    searchPanel.classList.add("active");
    searchBtn.classList.add("hidden");
    searchInput.focus();
    searchInput.select();
  }

  /**
   * Close search panel
   */
  function closeSearch() {
    isSearchOpen = false;
    searchPanel.classList.remove("active");
    searchBtn.classList.remove("hidden");
    clearSearch();
    searchInput.value = "";
    updateResultsInfo(0, 0);
  }

  /**
   * Perform search on menu items
   */
  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    // Clear previous search
    clearSearch();

    if (!query || query.length < 1) {
      updateResultsInfo(0, 0);
      return;
    }

    // Find all menu items
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      const nameEl = item.querySelector(".item-name");
      const descEl = item.querySelector(".description");

      let hasMatch = false;

      // Search in name
      if (nameEl) {
        const nameText = nameEl.textContent;
        if (nameText.toLowerCase().includes(query)) {
          hasMatch = true;
          highlightText(nameEl, query);
        }
      }

      // Search in description
      if (descEl) {
        const descText = descEl.textContent;
        if (descText.toLowerCase().includes(query)) {
          hasMatch = true;
          highlightText(descEl, query);
        }
      }

      if (hasMatch) {
        searchMatches.push(item);
      }
    });

    // Update results info
    if (searchMatches.length > 0) {
      currentMatchIndex = 0;
      updateResultsInfo(1, searchMatches.length);
      scrollToMatch(0);
    } else {
      currentMatchIndex = -1;
      updateResultsInfo(0, 0, true);
    }

    updateNavigationButtons();
  }

  /**
   * Highlight matching text in an element
   */
  function highlightText(element, query) {
    // Store original content
    if (!originalContents.has(element)) {
      originalContents.set(element, element.innerHTML);
    }

    const text = element.textContent;
    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    const highlighted = text.replace(
      regex,
      '<span class="search-highlight">$1</span>',
    );
    element.innerHTML = highlighted;
  }

  /**
   * Clear all search highlights and state
   */
  function clearSearch() {
    // Restore original contents
    originalContents.forEach((original, element) => {
      if (element && element.parentNode) {
        element.innerHTML = original;
      }
    });
    originalContents.clear();

    // Remove active state from items
    searchMatches.forEach((item) => {
      item.classList.remove("search-active");
    });

    searchMatches = [];
    currentMatchIndex = -1;
    updateNavigationButtons();
  }

  /**
   * Navigate through search results
   */
  function navigateResults(direction) {
    if (searchMatches.length === 0) return;

    // Remove current highlight
    if (currentMatchIndex >= 0 && searchMatches[currentMatchIndex]) {
      searchMatches[currentMatchIndex].classList.remove("search-active");
      updateHighlightClass(searchMatches[currentMatchIndex], false);
    }

    // Calculate new index
    currentMatchIndex += direction;
    if (currentMatchIndex >= searchMatches.length) {
      currentMatchIndex = 0;
    } else if (currentMatchIndex < 0) {
      currentMatchIndex = searchMatches.length - 1;
    }

    // Scroll to and highlight new match
    scrollToMatch(currentMatchIndex);
    updateResultsInfo(currentMatchIndex + 1, searchMatches.length);
  }

  /**
   * Scroll to a specific match
   */
  function scrollToMatch(index) {
    const item = searchMatches[index];
    if (!item) return;

    // Add active state
    item.classList.add("search-active");
    updateHighlightClass(item, true);

    // Scroll into view with offset for the search panel
    const panelHeight = searchPanel.offsetHeight + 20;
    const itemTop = item.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: itemTop - panelHeight - 20,
      behavior: "smooth",
    });
  }

  /**
   * Update highlight class for current match
   */
  function updateHighlightClass(item, isCurrent) {
    const highlights = item.querySelectorAll(".search-highlight");
    highlights.forEach((h) => {
      if (isCurrent) {
        h.classList.add("current");
      } else {
        h.classList.remove("current");
      }
    });
  }

  /**
   * Update results info display
   */
  function updateResultsInfo(current, total, noResults = false) {
    const currentSpan = resultsInfo.querySelector(".current");
    const totalSpan = resultsInfo.querySelector(".total");

    currentSpan.textContent = current;
    totalSpan.textContent = total;

    if (noResults && searchInput.value.trim()) {
      resultsInfo.classList.add("no-results");
    } else {
      resultsInfo.classList.remove("no-results");
    }
  }

  /**
   * Update navigation button states
   */
  function updateNavigationButtons() {
    const hasMatches = searchMatches.length > 0;
    prevBtn.disabled = !hasMatches;
    nextBtn.disabled = !hasMatches;
  }

  /**
   * Utility: Debounce function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Utility: Escape special regex characters
   */
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // Small delay to ensure menu is loaded
    setTimeout(init, 100);
  }
})();
