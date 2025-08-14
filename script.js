// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on any nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
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

// Animate career timeline on scroll
function animateCareerTimeline() {
  const items = document.querySelectorAll('.career-item');
  items.forEach(item => {
    if (isElementInViewport(item)) {
      item.classList.add('visible');
    }
  });
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
}

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
let darkMode = localStorage.getItem('darkMode') === 'true';

function updateToggleIcon() {
  const icon = themeToggle.querySelector('i');
  const text = themeToggle.querySelector('span');
  if (darkMode) {
    icon.classList.replace('fa-moon', 'fa-sun');
    text.textContent = 'Light Mode';
    document.body.style.background = ''; // fallback to original background in dark mode
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    text.textContent = 'Dark Mode';
    // Reapply gradient animation background
    document.body.style.background = '';
  }
}

function applyDarkMode() {
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  updateToggleIcon();
}

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  applyDarkMode();
});

window.addEventListener('load', () => {
  animateSkills();
  animateCareerTimeline();
  applyDarkMode();
});

window.addEventListener('scroll', () => {
  animateSkills();
  animateCareerTimeline();
});
