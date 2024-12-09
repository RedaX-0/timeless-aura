let currentIndex = 0;
const images = document.querySelectorAll('.hero-image');

function changeImage() {
  images[currentIndex].style.display = 'none'; // Hide current image
  currentIndex = (currentIndex + 1) % images.length; // Move to next image
  images[currentIndex].style.display = 'block'; // Show next image
}

setInterval(changeImage, 3000); // Change image every 3 seconds
