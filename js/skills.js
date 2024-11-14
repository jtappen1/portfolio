class SkillsCarousel {
    constructor(containerSelector, interval = 3000) {
        console.log("In skills")
        this.container = document.querySelector(containerSelector);
        this.items = this.container.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.interval = interval;
    }

    rotateCarousel() {
        this.items.forEach((item, index) => {
            const offset = (index - this.currentIndex + this.items.length) % this.items.length;
            item.style.transform = `translateX(${offset * 100}%)`;
        });
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }

    start() {
        this.rotateCarousel(); // Initial rotation
        setInterval(() => this.rotateCarousel(), this.interval);
    }
}

// Initialize the SkillsCarousel when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const skillsCarousel = new SkillsCarousel('.skills-carousel', 3000);
    skillsCarousel.start();
});
