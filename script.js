// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (isElementInViewport(bar)) {
            bar.style.width = width + '%';
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Theme Toggle Functionality
// Add this to your existing theme toggle functionality
function updateDarkModeElements() {
    // Ensure profile name and home section are visible in dark mode
    if (darkMode) {
        document.querySelector('.hero-title').style.color = '#f8f9fa';
        document.querySelector('.hero-subtitle').style.color = '#f8f9fa';
        document.querySelector('.hero-description').style.color = '#f8f9fa';
    } else {
        document.querySelector('.hero-title').style.color = '';
        document.querySelector('.hero-subtitle').style.color = '';
        document.querySelector('.hero-description').style.color = '';
    }
}

// Update the theme toggle event listener to include this
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateToggleIcon();
    updateDarkModeElements(); // Add this line
});

// Call this on initial load too
updateDarkModeElements();
const themeToggle = document.querySelector('.theme-toggle');
let darkMode = localStorage.getItem('darkMode') === 'true';

// Apply saved theme
if (darkMode) {
    document.body.classList.add('dark-mode');
    updateToggleIcon();
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateToggleIcon();
});

function updateToggleIcon() {
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    if (darkMode) {
        icon.classList.replace('fa-moon', 'fa-sun');
        text.textContent = 'Light Mode';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        text.textContent = 'Dark Mode';
    }
}

// Initialize animations on load
window.addEventListener('load', () => {
    animateSkills();
});

// Initialize skill animations on scroll
window.addEventListener('scroll', animateSkills);
