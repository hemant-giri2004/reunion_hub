// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate menu toggle button
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // Update copyright year
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                navbar.classList.remove('scroll-up');
                return;
            }

            if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
                // Scroll Down
                navbar.classList.remove('scroll-up');
                navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
                // Scroll Up
                navbar.classList.remove('scroll-down');
                navbar.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });
    }

    // Add active class to current navigation link
    const currentLocation = window.location.pathname;
    const navigationLinks = document.querySelectorAll('.nav-links a');
    
    navigationLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Slider functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Update current slide index
    currentSlide = index;
    
    // Handle wrap-around
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Function to advance to next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Start automatic slideshow
function startSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000); // Show each slide for 4 seconds (3s display + 1s transition)
}

// Add click handlers to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Prevent rapid clicking during transition
        if (slides[currentSlide].classList.contains('transitioning')) return;
        
        showSlide(index);
        startSlideshow();
    });
});

// Start the slideshow when the page loads
if (slider && slides.length > 0 && dots.length > 0) {
    startSlideshow();
}

// Pause slideshow when hovering over the slider
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume slideshow when mouse leaves the slider
slider.addEventListener('mouseleave', () => {
    startSlideshow();
});