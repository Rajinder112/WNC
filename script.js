// Maintenance Mode Check - This script runs immediately on page load
// IMPORTANT: To activate maintenance mode, uncomment the line below.
localStorage.setItem('maintenanceMode', 'true'); // This line enables maintenance mode

document.addEventListener('DOMContentLoaded', function() {
  const isMaintenanceMode = localStorage.getItem('maintenanceMode');
  const currentPage = window.location.pathname;

  // Redirect to maintenance page if mode is active and not already on maintenance page
  if (isMaintenanceMode === 'true' && !currentPage.includes('maintenance.html')) {
    window.location.replace('maintenance.html');
  } else if (isMaintenanceMode !== 'true' && currentPage.includes('maintenance.html')) {
    // If maintenance mode is off, but the user is on the maintenance page, redirect to home
    window.location.replace('index.html');
  }

  // Function to show a success message for forms
  function showSuccessMessage(elementId) {
    const successElement = document.getElementById(elementId);
    if (successElement) {
      successElement.classList.remove('hidden'); // Make it visible
      // Optionally hide after a few seconds
      setTimeout(() => {
        successElement.classList.add('hidden'); // Hide after 5 seconds
      }, 5000);
    }
  }

  // Handle Enrolment Form Submission
  const enrolForm = document.getElementById('enrolForm');
  if (enrolForm) {
    enrolForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent default form submission

      // In a real application, you would send this data to a server.
      // For this demonstration, we'll just log it and show a success message.
      const formData = new FormData(enrolForm);
      const data = Object.fromEntries(formData.entries());
      console.log('Enrolment Form Data:', data);

      enrolForm.reset(); // Clear the form fields
      showSuccessMessage('enrolSuccess'); // Show success message
    });
  }

  // Handle Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent default form submission

      // In a real application, you would send this data to a server.
      // For this demonstration, we'll just log it and show a success message.
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      console.log('Contact Form Data:', data);

      contactForm.reset(); // Clear the form fields
      showSuccessMessage('contactSuccess'); // Show success message
    });
  }

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeButton = document.getElementById('close-button'); // Get the close button

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }

  if (closeButton && mobileMenu) {
    closeButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  }

  // Lightbox functionality for gallery
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeLightbox = document.getElementById('lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      if (lightbox && lightboxImg && lightboxCaption) {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
        lightboxCaption.innerHTML = this.alt;
      }
    });
  });

  if (closeLightbox) {
    closeLightbox.addEventListener('click', function() {
      if (lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }

  // Navigation Bar Transparency on Scroll
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});
