
/*scroll down */
function scrollDown() {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  window.scrollBy({
    top: viewportHeight,
    behavior: 'smooth'
  });
}

// Show/hide the arrow based on scroll position
window.addEventListener('scroll', function() {
  const arrow = document.getElementById('scrollArrow');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  //

  // Adjust the value (200) based on when you want the arrow to appear
  if (scrollPosition > 200) {
    arrow.style.opacity = '1';
  } else {
    arrow.style.opacity = '0.7';
  }
});
/* slideshow */
let currentSlide = 0;
const images = document.querySelectorAll('.img-container img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  currentSlide = index >= 0 ? index : (currentSlide + 1) % images.length;

  images.forEach((img, i) => {
    img.style.display = i === currentSlide ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('activee', i === currentSlide);
  });

  setTimeout(showSlide, 3000);
}

showSlide();