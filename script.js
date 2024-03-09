// Array of image URLs
const imageUrls = [
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/12/riverdale-archie.jpg?quality=75&width=1200&auto=webp",
    "https://m.media-amazon.com/images/I/51P-b3wx2AL._AC_UF1000,1000_QL80_.jpg"
    // Add more image URLs as needed
];

// Function to create raining images
function createRainingImages() {
    const rainContainer = document.querySelector('.rain-container');

    for (let i = 0; i < 50; i++) { // Adjust the number of images as needed
        const image = document.createElement('img');
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        image.src = randomImageUrl;
        image.classList.add('raindrop');
        image.style.width = '100px'; // Adjust the width of the images
        image.style.height = 'auto'; // Maintain aspect ratio
        image.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
        image.style.animationDuration = Math.random() * 4 + 2 + 's'; // Random animation duration (between 2 to 6 seconds)
        image.style.animationDelay = Math.random() * 4 + 's'; // Random animation delay (between 0 to 4 seconds)
        rainContainer.appendChild(image);
    }
}

// Call the function to create raining images when the page loads
window.onload = createRainingImages;
