// hamburger Icon
// Toggles the show class that is initiated with value right:0;
// So that the sidebar looks coming from right 
const hamburger = document.querySelectorAll(".hamburger");
const sidebar = document.querySelector(".side-nav")

hamburger.forEach((ham) => {
    ham.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
})

navitem= document.querySelectorAll(".navitem")

navitem.forEach((i)=>{
    i.addEventListener("click",()=>{
        sidebar.classList.remove("show")
    })
})

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

// Loader
window.addEventListener('load', function () {
        const loader = document.querySelector('.loader');

        setTimeout(function () {
            loader.style.opacity = '0'; // Fade out the loader
        }, 2000); // Adjust delay time as needed

        setTimeout(function () {
            loader.style.transform = 'translateY(100%)'; // Hide the loader after fade out
        }, 2500); // Adjust delay time + fade out duration
});
