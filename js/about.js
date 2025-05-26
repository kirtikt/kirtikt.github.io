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

class AnimationReveal {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.init();
    }

    init() {
        window.addEventListener('scroll', this.scrollHandler);
        this.scrollHandler();
    }

    scrollHandler() {
        const revealPoint = window.innerHeight / 2; // Adjust as needed
        this.elements.forEach((element) => {
            const top = element.getBoundingClientRect().top;
            if (top < revealPoint) {
                element.classList.add('revealed');
            } 
            // else {
            //     element.classList.remove('revealed');
            // }
        });
    }
}

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