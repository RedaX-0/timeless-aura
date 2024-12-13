window.onscroll = function() {
  let navbar = document.getElementById("navbar");
  let logo = document.querySelector(".logo");
  let links = document.querySelectorAll("header #nav-links a");  // Target all <a> inside nav-links

  // Apply background color and text color on scroll
  if (window.scrollY > 50) {
    navbar.classList.add("bg-zinc-900");  // Add background color to navbar
    logo.classList.add("text-[#b5986e]");  // Change logo text color to #c7a87b
    links.forEach(link => {
      link.classList.add("text-[#b5986e]");  // Change navbar links text color to #c7a87b
    });
  } else {
    navbar.classList.remove("bg-zinc-900");  // Reset navbar background color
    logo.classList.remove("text-[#b5986e]");  // Reset logo text color
    links.forEach(link => {
      link.classList.remove("text-[#b5986e]");  // Reset navbar links text color
    });
  }
};



// Get the burger icon and the nav-links container
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Add an event listener to toggle the visibility of nav links
burger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});




let currentIndex = 0;
const images = document.querySelectorAll('.hero-image');

function changeImage() {
  images[currentIndex].style.display = 'none'; // Hide current image
  currentIndex = (currentIndex + 1) % images.length; // Move to next image
  images[currentIndex].style.display = 'block'; // Show next image
}

setInterval(changeImage, 3000); // Change image every 3 seconds




// Select all elements with the fade-in class
const fadeInElements = document.querySelectorAll('.fade-in');

// Create an Intersection Observer for fade-in elements
const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class for fade-in
      observer.unobserve(entry.target); // Stop observing once the element is visible
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each fade-in element
fadeInElements.forEach(element => fadeInObserver.observe(element));




// Select the container that has the fade-in-bottom class
const fadeInBottomElements = document.querySelectorAll('.fade-in-bottom');

// Create an Intersection Observer for fade-in-bottom elements
const fadeInBottomObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class for fade-in-bottom
      observer.unobserve(entry.target); // Stop observing once the element is visible
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each fade-in-bottom element
fadeInBottomElements.forEach(element => fadeInBottomObserver.observe(element));



