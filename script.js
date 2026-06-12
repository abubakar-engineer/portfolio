// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggleBtn.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Entrance animations
gsap.from("header", { y: -60, opacity: 0, duration: 0.8 });
gsap.from(".hero h1", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
gsap.from(".hero p", { y: 30, opacity: 0, duration: 1, delay: 0.2 });
gsap.from(".hero .btn-primary, .hero .btn-outline", { 
    scale: 0.9, opacity: 0, duration: 0.6, delay: 0.5, stagger: 0.1 
});

// Scroll reveal for cards and headings
const reveals = document.querySelectorAll('.card, h2');
reveals.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Stagger effect for project cards
gsap.from(".grid-2 .card", {
    scrollTrigger: { trigger: "#projects", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.15
});

// Hire Me button scroll
document.getElementById('hireBtn')?.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Contact form simulation with response
const contactForm = document.getElementById('contactForm');
const feedbackDiv = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('emailId').value.trim();
    const msg = document.getElementById('messageBox').value.trim();

    if (!name || !email || !msg) {
        feedbackDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> All fields are required.';
        feedbackDiv.style.background = 'rgba(239, 68, 68, 0.15)';
        feedbackDiv.style.color = '#ef4444';
        setTimeout(() => { 
            feedbackDiv.innerHTML = ''; 
            feedbackDiv.style.background = ''; 
        }, 2600);
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        feedbackDiv.innerHTML = '<i class="fas fa-envelope"></i> Valid email required.';
        feedbackDiv.style.background = 'rgba(239, 68, 68, 0.15)';
        setTimeout(() => { feedbackDiv.innerHTML = ''; }, 2400);
        return;
    }

    feedbackDiv.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending your message...';
    feedbackDiv.style.background = 'rgba(37, 99, 235, 0.15)';

    setTimeout(() => {
        feedbackDiv.innerHTML = `<i class="fas fa-check-circle"></i> Thanks ${name}! I'll get back to you soon. (My SQL + Node skills are ready to discuss!) ✨`;
        feedbackDiv.style.background = 'rgba(34, 197, 94, 0.15)';
        feedbackDiv.style.color = '#22c55e';
        contactForm.reset();
        setTimeout(() => {
            feedbackDiv.innerHTML = '';
            feedbackDiv.style.background = '';
        }, 5000);
    }, 1300);
});

// Smooth navigation for internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElem = document.getElementById(targetId);
        if (targetElem) targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Set Node.js progress fill width
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    const nodeFill = document.getElementById('nodeFill');
    if (nodeFill) nodeFill.style.width = '20%';
});