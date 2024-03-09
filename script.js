// Array of image URLs
const imageUrls = [
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/12/riverdale-archie.jpg?quality=75&width=1200&auto=webp",
    "https://m.media-amazon.com/images/I/51P-b3wx2AL._AC_UF1000,1000_QL80_.jpg"
    // Add more image URLs as needed
];

// Function to create raining images
function createRainingImages() {
    const rainContainer = document.querySelector('.rain-container');
    
    function addImage() {
        const image = document.createElement('img');
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        image.src = randomImageUrl;
        image.classList.add('raindrop');
        image.style.width = '40px'; // Adjust the width of the images
        image.style.height = 'auto'; // Maintain aspect ratio
        image.style.position = 'absolute';
        image.style.left = Math.random() * (window.innerWidth - 40) + 'px'; // Random horizontal position
        image.style.top = '0'; // Fixed vertical position at the top of the screen
        image.style.animationDuration = Math.random() * 4 + 2 + 's'; // Random animation duration (between 2 to 6 seconds)
        rainContainer.appendChild(image);
    }

    // Add two images every 15 seconds
    setInterval(() => {
        addImage();
        addImage();
    }, 15000); // 15 seconds in milliseconds
}

// Call the function to create raining images when the page loads
window.onload = createRainingImages;
