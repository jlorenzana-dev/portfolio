// ========================================
// Kawaii Portfolio - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px -5px rgba(244, 114, 182, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add initial styles and observe elements
    const animatedElements = document.querySelectorAll('.kawaii-card, .project-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add sparkle effect on card hover
    const cards = document.querySelectorAll('.kawaii-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const sparkle = this.querySelector('.sparkle-decor');
            if (sparkle) {
                sparkle.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', function () {
            const sparkle = this.querySelector('.sparkle-decor');
            if (sparkle) {
                sparkle.style.opacity = '0.4';
            }
        });
    });

    // Console greeting
    console.log('%c✨ Welcome to Jessa\'s Portfolio! ✨',
        'color: #f472b6; font-size: 20px; font-weight: bold; font-family: "Quicksand", sans-serif;');
    console.log('%c💖 Thanks for visiting! Feel free to connect! 💖',
        'color: #c4b5fd; font-size: 14px; font-family: "Quicksand", sans-serif;');
});
