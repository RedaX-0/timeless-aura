window.onscroll = function() {
  let navbar = document.getElementById("navbar");
  let links = document.querySelectorAll("header a");

  // Apply transition when scrolling
  if (window.scrollY > 50) {
    navbar.classList.add("bg-zinc-900");
    navbar.classList.add("shadow-lg");  // Optional: Add shadow for extra effect

    links.forEach(link => {
      link.classList.add("text-[#c7a87b]", "transition-colors", "duration-1000", "ease-in-out");
    });
  } else {
    navbar.classList.remove("bg-zinc-900");
    navbar.classList.remove("shadow-lg");  // Optional: Remove shadow

    links.forEach(link => {
      link.classList.remove("text-[#c7a87b]");
    });
  }
};



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



