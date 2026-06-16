  // Hamburger menu
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('mobile-open');
  }

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('mobile-open');
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(r => observer.observe(r));

  // FAQ toggle
  function toggleFaq(btn) {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  }

  // Form submit
  function submitForm() {
    const name = document.getElementById('f-name').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    if (!name) { alert('Please enter your name.'); return; }
    if (!phone || phone.length < 10) { alert('Please enter a valid mobile number.'); return; }
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('f-name').value = '';
    document.getElementById('f-phone').value = '';
    document.getElementById('f-email').value = '';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  // Nav scroll style
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 80) {
      nav.style.height = '56px';
      nav.style.background = 'rgba(10,20,14,0.97)';
    } else {
      nav.style.height = '64px';
      nav.style.background = 'rgba(13,26,18,0.92)';
    }
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
