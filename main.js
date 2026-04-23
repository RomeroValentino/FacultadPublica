// ── Botones de monto ──
function setAmount(btn) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ── Animación de scroll (reveal) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.step, .mat-card').forEach(el => observer.observe(el));
