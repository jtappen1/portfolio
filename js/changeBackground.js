const images = [
    'url("assets/img/mario-ho-vV2A5OHUqsU-unsplash.jpg")',
    'url("assets/img/patrick-hendry-37ZuGYD3JOk-unsplash.jpg")',
    'url("assets/img/frances-gunn-8BmNurlVR6M-unsplash.jpg")',
   
];

let currentIndex = 0;

function changeBackground() {
    const container = document.querySelector('.masthead');
    container.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop through the images
}

setInterval(changeBackground, 5000); // Change every 5 seconds
changeBackground();