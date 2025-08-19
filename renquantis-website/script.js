// Renquantis — script.js
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn && nav){
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    // Close on link click (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // Contact form demo (front-end only)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // Simulate send
      setTimeout(() => {
        msg.textContent = `Thanks, ${data.name}! We'll reach out at ${data.email}.`;
        msg.style.color = '#9be7ff';
        form.reset();
      }, 400);
    });
  }
})();