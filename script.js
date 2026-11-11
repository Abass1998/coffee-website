const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// WhatsApp number
const WA_NUMBER = '2348012345678';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

function openWhatsApp(message) {
  const text = encodeURIComponent(message || 'Hi Morning Brew! I would like to order coffee.');
  window.open(`${WA_BASE}?text=${text}`, '_blank');
}

// Hero and main WhatsApp buttons
document.getElementById('whatsapp-hero') && document.getElementById('whatsapp-hero').addEventListener('click', e => {
  e.preventDefault();
  openWhatsApp('Hi Morning Brew! I would like to see the menu and order.');
});

document.getElementById('whatsapp-main') && document.getElementById('whatsapp-main').addEventListener('click', e => {
  e.preventDefault();
  openWhatsApp('Hi Morning Brew! I would like to place an order.');
});

// Order buttons from menu cards
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.dataset.item || '';
    openWhatsApp(`Hi Morning Brew! I would like to order: ${item}`);
  });
});

// Order form -> prefill WhatsApp
const form = document.getElementById('order-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const items = document.getElementById('items').value.trim();
    const location = document.getElementById('location').value.trim();

    if (!name || !phone || !items || !location) {
      alert('Please fill all fields.');
      return;
    }

    const message = `Order from ${name}
Phone: ${phone}
Location: ${location}
Items:
${items}

Please confirm availability and delivery time. Thanks!`;

    openWhatsApp(message);
  });
}
