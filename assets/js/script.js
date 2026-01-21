const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.remove('opacity-0', 'invisible');
        scrollBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollBtn.classList.add('opacity-0', 'invisible');
        scrollBtn.classList.remove('opacity-100', 'visible');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-badge').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});
// Gestionnaire de thème
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Fonction pour définir le thème
function setTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
}

// Vérifier la préférence sauvegardée ou la préférence système
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Écouteur d'événement pour le bouton de changement de thème
themeToggle.addEventListener('click', () => {
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Écouter les changements de préférence système
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-3-line');
    } else {
        icon.classList.remove('ri-menu-3-line');
        icon.classList.add('ri-close-line');
    }
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-3-line');
    });
});