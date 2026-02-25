// ---- EmailJS Initialization ----
const EMAILJS_PUBLIC_KEY = 'Ysa5RdFpuY_FsW6NQ';
const EMAILJS_SERVICE_ID = 'service_65a1qst';
const EMAILJS_TEMPLATE_ID = 'template_e8sanxi';

(function() {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
})();

function sendEmail(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMessage');
  
  btn.disabled = true;
  btn.textContent = 'Sending...';
  msg.className = 'form-message';
  msg.style.display = 'none';

  const params = {
    from_name: document.getElementById('from_name').value,
    reply_to: document.getElementById('reply_to').value,
    interest: document.getElementById('interest').value,
    message: document.getElementById('message').value,
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then(function() {
      msg.className = 'form-message success';
      msg.textContent = 'Message sent successfully. We will be in touch.';
      msg.style.display = 'block';
      document.getElementById('contactForm').reset();
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }, function(error) {
      msg.className = 'form-message error';
      msg.textContent = 'Something went wrong. Please email us directly at rob.steiner@xgsportsmedia.com';
      msg.style.display = 'block';
      btn.disabled = false;
      btn.textContent = 'Send Message';
      console.error('EmailJS error:', error);
    });
}

// ---- Mobile menu ----
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('active');
  document.getElementById('mobileMenu').classList.toggle('active');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('mobileMenu').classList.remove('active');
  document.body.style.overflow = '';
}

// ---- Scroll reveal ----
const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(function(el) {
  revealObserver.observe(el);
});

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
