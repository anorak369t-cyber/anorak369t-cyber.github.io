document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simple front-end feedback, replace with AJAX/email logic for production
  document.getElementById('formMessage').textContent =
    'Thank you for contacting us! We will get back to you shortly.';
  setTimeout(() => {
    document.getElementById('formMessage').textContent = '';
    document.getElementById('contactForm').reset();
  }, 4000);
});



