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

// Initialize animations
window.addEventListener('load', animateSkills);
window.addEventListener('scroll', animateSkills);

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', formData);
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  contactForm.reset();
});

// Theme Toggle Functionality
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

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.padding = '20px 0';
    header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  }
});

// Initialize animations on load
window.addEventListener('load', () => {
  animateSkills();
  
  // Set initial header style
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});
