document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);
    } else if (prefersDarkScheme.matches) {
        document.body.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            if (theme === 'dark') {
                theme = 'light';
            } else {
                theme = 'dark';
            }
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateIcon(theme);
        });
    }

    function updateIcon(theme) {
        // Simple text/emoji switch for icon, can be replaced with SVGs
        // Sun for light mode, Moon for dark mode
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', `Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`);
        }
    }

    // Active Link Highlighting
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    const menuLength = menuItems.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].className = "active";
        }
    }
});
