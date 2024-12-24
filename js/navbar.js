// Select the navbar
const navbar = document.querySelector(".navbar");

// Add scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adjust the scroll threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
