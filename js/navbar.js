// Select the navbar element
const navbar = document.querySelector('nav#navbar');
let hover = false;
let scrolled = false;

// Add event listener to the window object
window.addEventListener('scroll', () => {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Set threshold value
  const threshold = 100;

  // Check if scroll position is greater than threshold
  if (scrollPosition > threshold) {
    // Add CSS class to navbar element
    navbar.style.background = "#333333";
    scrolled = true;
    
  } else if (!hover) {
    // Remove CSS class from navbar element
    navbar.style.background = "transparent";
    scrolled = false;
  }
});
navbar.addEventListener('mouseover', () => {

  // Add CSS class to navbar element
  if (!scrolled) {
    navbar.style.background = "#333333";
  }
  hover = true;
});
navbar.addEventListener('mouseout', () => {

  // Remove CSS class from navbar element
  if (!scrolled) {
    navbar.style.background = "transparent";
  }
  hover = false;
});
