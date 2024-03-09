// Array of image URLs
var imageUrls = [
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/12/riverdale-archie.jpg?quality=75&width=1200&auto=webp",
    "https://m.media-amazon.com/images/I/51P-b3wx2AL._AC_UF1000,1000_QL80_.jpg",
    // Add more image URLs as needed
];

// Function to create raining images
function createRainingImages() {
    for (var i = 0; i < 50; i++) { // Adjust the number of images as needed
        var image = new Image();
        image.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        image.classList.add("falling-image");
        document.getElementById("container").appendChild(image);
    }
}

// Call the function to create raining images
createRainingImages();
