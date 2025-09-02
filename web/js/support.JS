// FAQ Toggle
function toggleFaq(idx) {
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    if (i === idx - 1) {
      item.classList.toggle('open');
      item.querySelector('.faq-question').classList.toggle('active');
    } else {
      item.classList.remove('open');
      item.querySelector('.faq-question').classList.remove('active');
    }
  });
}

// Support Form handler
document.getElementById('supportForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('supportFormMessage').textContent =
    'Thank you! Our support team will contact you soon.';
  setTimeout(() => {
    document.getElementById('supportFormMessage').textContent = '';
    document.getElementById('supportForm').reset();
  }, 4000);
});