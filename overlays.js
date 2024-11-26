document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".overlay1-imagescroll");
  const overlayContent = document.querySelector(".overlay-content");
  const coverPage = document.querySelector(".cover-page"); // Full-screen cover page
  const totalImageHeight = imageContainer.scrollHeight; // Total height of all images combined
  const viewportHeight = overlayContent.offsetHeight; // Height of the viewport

  let currentTranslate = 100; // Start with images offscreen to the right (horizontal scroll)

  // Function to update the image scroll position
  function updateScroll() {
    imageContainer.style.transform = `translateX(${currentTranslate}%)`;
  }

  // Reset all states when overlay is closed
  function resetOverlay() {
    currentTranslate = 100; // Reset the image position to the initial state
    updateScroll(); // Apply the reset transformation
  }

  // Wheel event for scrolling images, but only on larger devices
  function handleWheelEvent(event) {
    // Check if the overlay is open and prevent scroll effect on small screens (<=768px)
    if (!coverPage.classList.contains("open") || window.matchMedia("(max-width: 768px)").matches) {
      return; // Prevent scrolling behavior on small devices (<=768px)
    }

    const scrollSpeed = 2; // Adjust the scrolling speed
    if (event.deltaY > 0) {
      currentTranslate -= scrollSpeed; // Scroll down (move images left)
    } else {
      currentTranslate += scrollSpeed; // Scroll up (move images right)
    }

    // Ensure the images don't scroll too far
    const maxTranslate = 100; // Initial position
    const minTranslate = -(totalImageHeight / viewportHeight) * 100; // Fully scrolled position for vertical scroll

    if (currentTranslate > maxTranslate) {
      currentTranslate = maxTranslate;
    }
    if (currentTranslate < minTranslate) {
      currentTranslate = minTranslate;
    }

    updateScroll();
  }

  // Add wheel event listener
  window.addEventListener("wheel", handleWheelEvent);

  // Button click for opening overlay
  const coverLinks = document.querySelectorAll(".cover-link");
  coverLinks.forEach((coverLink) => {
    coverLink.addEventListener("click", (e) => {
      e.preventDefault();
      coverPage.classList.add("open"); // Add open class to the overlay
    });
  });

  // Button click for closing overlay
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    coverPage.classList.add("close"); // Fade out the overlay

    // Wait for the fade-out transition to complete before removing 'open' and 'close' classes
    setTimeout(() => {
      coverPage.classList.remove("open", "close"); // Reset overlay state
      resetOverlay(); // Reset the images and scroll position
    }, 500); // Match transition duration
  });
});

// Second-overlay-with-effect
document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".overlay-imagescroll2");
  const overlayContent = document.querySelector(".overlay-content2");
  const coverPage = document.querySelector(".cover-page2"); // Full-screen cover page
  const totalImageHeight = imageContainer.scrollHeight; // Total height of all images combined
  const viewportHeight = overlayContent.offsetHeight; // Height of the viewport

  let currentTranslate = 100; // Start with images offscreen to the right (horizontal scroll)

  // Function to update the image scroll position
  function updateScroll() {
    imageContainer.style.transform = `translateX(${currentTranslate}%)`;
  }

  // Reset all states when overlay is closed
  function resetOverlay() {
    currentTranslate = 100; // Reset the image position to the initial state
    updateScroll(); // Apply the reset transformation
  }

  // Wheel event for scrolling images, but only on larger devices
  function handleWheelEvent(event) {
    // Check if the overlay is open and prevent scroll effect on small screens (<=768px)
    if (!coverPage.classList.contains("open2") || window.matchMedia("(max-width: 768px)").matches) {
      return; // Prevent scrolling behavior on small devices (<=768px)
    }

    const scrollSpeed = 2; // Adjust the scrolling speed
    if (event.deltaY > 0) {
      currentTranslate -= scrollSpeed; // Scroll down (move images left)
    } else {
      currentTranslate += scrollSpeed; // Scroll up (move images right)
    }

    // Ensure the images don't scroll too far
    const maxTranslate = 100; // Initial position
    const minTranslate = -(totalImageHeight / viewportHeight) * 100; // Fully scrolled position for vertical scroll

    if (currentTranslate > maxTranslate) {
      currentTranslate = maxTranslate;
    }
    if (currentTranslate < minTranslate) {
      currentTranslate = minTranslate;
    }

    updateScroll();
  }

  // Add wheel event listener
  window.addEventListener("wheel", handleWheelEvent);

  // Button click for opening overlay
  const coverLinks = document.querySelectorAll(".cover-link2");
  coverLinks.forEach((coverLink) => {
    coverLink.addEventListener("click", (e) => {
      e.preventDefault();
      coverPage.classList.add("open2"); // Add open class to the overlay
    });
  });

  // Button click for closing overlay
  const closeBtn = document.querySelector(".close-btn2");
  closeBtn.addEventListener("click", () => {
    coverPage.classList.add("close2"); // Fade out the overlay

    // Wait for the fade-out transition to complete before removing 'open' and 'close' classes
    setTimeout(() => {
      coverPage.classList.remove("open2", "close2"); // Reset overlay state
      resetOverlay(); // Reset the images and scroll position
    }, 500); // Match transition duration
  });
});
// Second Overlay
// document.addEventListener("DOMContentLoaded", () => {
//   // Select all elements with the cover-link class
//   const coverLinks = document.querySelectorAll(".cover-link2");
//   const coverPage = document.querySelector(".cover-page2"); // Full-screen cover page
//   const closeBtn = document.querySelector(".close-btn2"); // Close button on the cover page

//   // Loop through each link and add an event listener
//   coverLinks.forEach((coverLink) => {
//     coverLink.addEventListener("click", (e) => {
//       e.preventDefault(); // Prevent default link behavior
//       coverPage.classList.add("open2"); // Show the cover page by adding 'open' class
//     });
//   });

//   // Event listener for closing the cover page
//   closeBtn.addEventListener("click", () => {
//     coverPage.classList.add("close2"); // Add the fade-out effect

//     // Wait for the fade-out transition to complete before removing 'open' and 'close' classes
//     setTimeout(() => {
//       coverPage.classList.remove("open2", "close2");
//     }, 500); // Match the duration with the CSS transition (0.5s)
//   });
// });