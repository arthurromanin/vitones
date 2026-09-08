const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Tabs
const tabButtons = document.querySelectorAll('.tabs button');
const tabContents = document.querySelectorAll('.tab-contents > div');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabButtons.forEach(b => {
            b.classList.remove('tab-active');
            b.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(c => {
            c.classList.remove('content-active');
            c.classList.add('content');
            c.hidden = true;
        });

        btn.classList.add('tab-active');
        btn.setAttribute('aria-selected', 'true');

        const el = document.getElementById(target);
        el.classList.remove('content');
        el.classList.add('content-active');
        el.hidden = false;
    });
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Smooth scroll com offset da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - offset,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    });
});

// Contador animado dos números de credibilidade
function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const isDecimal = el.dataset.decimal === 'true';
    const duration = 1200;
    const start = performance.now();

    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);
        if (progress < 1) requestAnimationFrame(step);
    }

    if (prefersReducedMotion) {
        el.textContent = isDecimal ? target.toFixed(1) : target;
    } else {
        requestAnimationFrame(step);
    }
}

// Scroll-reveal das seções
const revealTargets = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
    document.querySelectorAll('.stat-number').forEach(animateCount);
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');

            if (entry.target.id === 'stats') {
                entry.target.querySelectorAll('.stat-number').forEach(animateCount);
            }

            observer.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    revealTargets.forEach(el => revealObserver.observe(el));
}
