// Array of image URLs
const imageUrls = [
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/12/riverdale-archie.jpg?quality=75&width=1200&auto=webp",
    "https://m.media-amazon.com/images/I/51P-b3wx2AL._AC_UF1000,1000_QL80_.jpg"
    // Add more image URLs as needed
];

// Function to create raining images
function createRainingImages() {
    const rainContainer = document.querySelector('.rain-container');
    let delay = 0;

    for (let i = 0; i < 50; i++) { // Adjust the number of images as needed
        setTimeout(() => {
            const image = document.createElement('img');
            const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
            image.src = randomImageUrl;
            image.classList.add('raindrop');
            image.style.width = '50px'; // Adjust the width of the images
            image.style.height = 'auto'; // Maintain aspect ratio
            image.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
            image.style.animationDuration = Math.random() * 4 + 2 + 's'; // Random animation duration (between 2 to 6 seconds)
            rainContainer.appendChild(image);
        }, delay * 1000); // Convert delay to milliseconds

        delay += 30; // Increase delay for next image (30 seconds)
    }
}

// Call the function to create raining images when the page loads
window.onload = createRainingImages;
