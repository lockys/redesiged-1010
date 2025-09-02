// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('siteNav');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  document.body.classList.toggle('nav-open');
});
siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  });
});

// Countdown to National Day
const daysEl = document.getElementById('cd-days');
const hoursEl = document.getElementById('cd-hours');
const minsEl = document.getElementById('cd-mins');
const target = new Date('2025-10-10T10:00:00+08:00');
function updateCountdown(){
  const now = new Date();
  let diff = target - now;
  if (diff <= 0){
    daysEl.textContent = hoursEl.textContent = minsEl.textContent = '0';
    return;
  }
  const d = Math.floor(diff / 86400000);
  diff %= 86400000;
  const h = Math.floor(diff / 3600000);
  diff %= 3600000;
  const m = Math.floor(diff / 60000);
  daysEl.textContent = d;
  hoursEl.textContent = h;
  minsEl.textContent = m;
}
updateCountdown();
setInterval(updateCountdown, 60000);

// Lazy YouTube loader
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.video').forEach(v => {
  const loadVideo = () => {
    const id = v.dataset.video;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    iframe.title = 'YouTube video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    v.innerHTML = '';
    v.appendChild(iframe);
  };
  v.addEventListener('click', loadVideo, { once:true });
  v.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      loadVideo();
    }
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { threshold:0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Back to top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) backBtn.classList.add('show');
  else backBtn.classList.remove('show');
});

backBtn.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' });
});
