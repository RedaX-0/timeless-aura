// Get the thumbnails and watch image elements
const thumbnails = document.querySelectorAll('.thumbnail');
const watchImage = document.getElementById('watch-image');

// Set the first thumbnail as the default active and main image
if (thumbnails.length > 0) {
    watchImage.src = thumbnails[0].src; // Set the main image to the first thumbnail's src
    thumbnails[0].classList.add('active'); // Add active class to the first thumbnail
}

// Add event listener to each thumbnail
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach((thumb) => thumb.classList.remove('active'));
        
        // Add active class to the clicked thumbnail
        thumbnail.classList.add('active');
        
        // Update the watch image src
        watchImage.src = thumbnail.src;
    });
});

