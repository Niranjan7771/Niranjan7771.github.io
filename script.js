// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
}

// Attach click event to a hamburger icon (you'll need to add it in HTML)
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Smooth scrolling
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lightbox for project images
  const images = document.querySelectorAll('#projects img');
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      const fullImage = document.createElement('img');
      fullImage.src = img.src;
      fullImage.alt = img.alt;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(fullImage);
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Contact form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    let errors = [];

    if (name === '') errors.push('Name is required.');
    if (email === '' || !email.includes('@')) errors.push('Valid email is required.');
    if (message === '') errors.push('Message cannot be empty.');

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join('\n'));
    }
  });
});
