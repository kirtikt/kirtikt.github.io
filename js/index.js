// hamburger Icon
// Toggles the show class that is initiated with value right:0;
// So that the sidebar looks coming from right 
const hamburger = document.querySelectorAll(".hamburger");
const sidebar = document.querySelector(".side-nav");
const navItems = document.querySelectorAll(".navitem .underline");

hamburger.forEach((ham) => {
    ham.addEventListener("click", () => {
        sidebar.classList.toggle("show");
        if (sidebar.classList.contains("show")) {
            // Add animate class to trigger animation
            setTimeout(() => {
                navItems.forEach((item) => {
                    item.classList.add("animate");
                });
            }, 10);
        } else {
            // Remove animate class to reset animation
            navItems.forEach((item) => {
                item.classList.remove("animate");
            });
        }
    });
});

const navItemElements = document.querySelectorAll(".navitem");

navItemElements.forEach((i) => {
    i.addEventListener("click", () => {
        sidebar.classList.remove("show");
        // Remove animate class to reset animation
        navItems.forEach((item) => {
            item.classList.remove("animate");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Slide the loader up immediately when the page starts loading
    setTimeout(() => {
        loader.style.transform = 'translateY(0)';
    }, 100); // A slight delay to ensure the CSS transition kicks in

    window.addEventListener('load', function() {
        // Once the content is fully loaded, slide the loader down
        setTimeout(() => {
            loader.style.transform = 'translateY(100%)';

            // Allow some time for the loader to complete the animation
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
                content.style.display = 'block'; // Show the actual content
            }, 1500); // Match this duration with the CSS transition duration
        }, 2000); // Simulate a 2-second content loading time
    });
});

document.addEventListener('DOMContentLoaded', () => {
    new AnimationReveal('.animation-reveal');
});

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');

    setTimeout(function () {
       loader.style.opacity = '0'; // Fade out the loader
    }, 2000); // Adjust delay time as needed

    setTimeout(function () {
       loader.style.transform = 'translateY(100%)'; // Hide the loader after fade out
    }, 2500); // Adjust delay time + fade out duration
});

// Pupil
document.addEventListener('DOMContentLoaded', () => {
    const eyes = document.querySelectorAll('.eye');
    const pupils = document.querySelectorAll('.pupil');
  
    document.addEventListener('mousemove', (e) => {
      eyes.forEach((eye, index) => {
        const pupil = pupils[index];
        const rect = eye.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const eyeCenterX = rect.left + scrollLeft + rect.width / 2;
        const eyeCenterY = rect.top + scrollTop + rect.height / 2;
        const maxMove = (rect.width / 2) - (pupil.offsetWidth / 2);
        
        // Calculate mouse position relative to the center of the eye
        const mouseX = e.pageX - eyeCenterX;
        const mouseY = e.pageY - eyeCenterY;
        
        // Calculate the angle and the distance
        const angle = Math.atan2(mouseY, mouseX);
        const distance = Math.min(maxMove, Math.sqrt(mouseX * mouseX + mouseY * mouseY));
  
        // Calculate the new pupil position
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;
        
        // Move the pupil, adjusting for its size
        pupil.style.left = `${50 + (pupilX / rect.width) * 100}%`;
        pupil.style.top = `${50 + (pupilY / rect.height) * 100}%`;
        pupil.style.transform = 'translate(-50%, -50%)';
      });
    });
  });
  
