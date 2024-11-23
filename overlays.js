document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the cover-link class
  const coverLinks = document.querySelectorAll(".cover-link");
  const coverPage = document.querySelector(".cover-page"); // Full-screen cover page
  const closeBtn = document.querySelector(".close-btn"); // Close button on the cover page

  // Loop through each link and add an event listener
  coverLinks.forEach((coverLink) => {
    coverLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      coverPage.classList.add("open"); // Show the cover page by adding 'open' class
    });
  });

  // Event listener for closing the cover page
  closeBtn.addEventListener("click", () => {
    coverPage.classList.add("close"); // Add the fade-out effect

    // Wait for the fade-out transition to complete before removing 'open' and 'close' classes
    setTimeout(() => {
      coverPage.classList.remove("open", "close");
    }, 500); // Match the duration with the CSS transition (0.5s)
  });
});

// Second Overlay
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the cover-link class
  const coverLinks = document.querySelectorAll(".cover-link2");
  const coverPage = document.querySelector(".cover-page2"); // Full-screen cover page
  const closeBtn = document.querySelector(".close-btn2"); // Close button on the cover page

  // Loop through each link and add an event listener
  coverLinks.forEach((coverLink) => {
    coverLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      coverPage.classList.add("open2"); // Show the cover page by adding 'open' class
    });
  });

  // Event listener for closing the cover page
  closeBtn.addEventListener("click", () => {
    coverPage.classList.add("close2"); // Add the fade-out effect

    // Wait for the fade-out transition to complete before removing 'open' and 'close' classes
    setTimeout(() => {
      coverPage.classList.remove("open2", "close2");
    }, 500); // Match the duration with the CSS transition (0.5s)
  });
});