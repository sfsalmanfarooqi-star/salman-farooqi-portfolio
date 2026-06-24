// ===================================
// Global Variables
// ===================================
let isMenuOpen = false;
let currentTheme = localStorage.getItem('theme') || 'light';
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

// ===================================
// Initialize on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initSkillBars();
    initCounters();
    initContactForm();
    initScrollToTop();
    initVoiceFeature();
    hideLoadingScreen();
});

// ===================================
// Loading Screen
// ===================================
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
}

// ===================================
// Theme Toggle (Dark/Light Mode)
// ===================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Set initial theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        if (currentTheme === 'light') {
            currentTheme = 'dark';
            html.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            currentTheme = 'light';
            html.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        localStorage.setItem('theme', currentTheme);
    });
}

// ===================================
// Navigation
// ===================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                isMenuOpen = false;
            }
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Typing Effect for Hero Section
// ===================================
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    const titles = [
        'Deal Desk Analyst',
        'Revenue Operations Expert',
        'MBA - International Business',
        'Financial Analyst'
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            // Pause at end
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect
    setTimeout(type, 1000);
}

// ===================================
// GSAP Scroll Animations
// ===================================
function initScrollAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-greeting', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5
    });
    
    gsap.from('.hero-name', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.7
    });
    
    gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.9
    });
    
    gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.1
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.3
    });
    
    gsap.from('.hero-social', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.5
    });
    
    gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.8
    });
    
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });
    
    // About section animations
    gsap.from('.about-info', {
        scrollTrigger: {
            trigger: '.about-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8
    });
    
    gsap.from('.about-stats', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8
    });
    
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.6,
            delay: index * 0.1
        });
    });
    
    // Skills categories animation
    gsap.utils.toArray('.skill-category').forEach((category, index) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.1
        });
    });
    
    // Education cards animation
    gsap.utils.toArray('.education-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.2
        });
    });
    
    // Contact section animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8
    });
    
    gsap.from('.contact-form-wrapper', {
        scrollTrigger: {
            trigger: '.contact-form-wrapper',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8
    });
}

// ===================================
// Skill Bars Animation
// ===================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ===================================
// Counter Animation for Stats
// ===================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target + '+';
                    }
                };
                
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===================================
// Contact Form Handler
// ===================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Create mailto link
        const mailtoLink = `mailto:sfsalmanfarooqi@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your email client will open to send the message.');
        
        // Reset form
        form.reset();
    });
}

// ===================================
// Scroll to Top Button
// ===================================
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Smooth Scroll for All Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Floating Badges Animation
// ===================================
gsap.to('.floating-badge', {
    y: -20,
    duration: 2,
    ease: 'power1.inOut',
    stagger: 0.5,
    repeat: -1,
    yoyo: true
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===================================
// Add Hover Effects to Cards
// ===================================
document.querySelectorAll('.stat-card, .skill-category, .education-card, .contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Timeline Item Hover Effect
// ===================================
document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mouseenter', function() {
        gsap.to(this, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    content.addEventListener('mouseleave', function() {
        gsap.to(this, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Social Links Hover Animation
// ===================================
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -5,
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Button Hover Effects
// ===================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Cursor Trail Effect (Optional)
// ===================================
const createCursorTrail = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.cursor-circle');
    
    if (circles.length === 0) return;
    
    circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle, index) => {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.scale = (circles.length - index) / circles.length;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
};

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hello! Welcome to my portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, JavaScript & GSAP', 'color: #6b7280; font-size: 14px;');
console.log('%cInterested in the code? Check out the source!', 'color: #3b82f6; font-size: 14px;');

// ===================================
// Performance Optimization
// ===================================
// Lazy load images when they come into view
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Prevent Right Click on Images (Optional)
// ===================================
// Uncomment if you want to protect images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => {
//         e.preventDefault();
//     });
// });

// ===================================
// Easter Egg - Konami Code
// ===================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        console.log('%c🎉 Konami Code Activated! You found the easter egg!', 'color: #10b981; font-size: 24px; font-weight: bold;');
        document.body.style.animation = 'rainbow 2s linear infinite';
    }
});

// ===================================
// Print Styles Handler
// ===================================
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Made with Bob


// ===================================
// Voice Feature - Text to Speech
// ===================================
function initVoiceFeature() {
    const voiceToggle = document.getElementById('voice-toggle');
    const avatar = document.getElementById('avatar');
    const avatarMouth = document.querySelector('.avatar-mouth');
    
    // Check if browser supports Speech Synthesis
    if (!('speechSynthesis' in window)) {
        console.warn('Speech Synthesis not supported in this browser');
        voiceToggle.style.display = 'none';
        return;
    }
    
    // Introduction text to be spoken
    const introductionText = `
        Hello! I'm Salman Farooqi, a Deal Desk and Revenue Operations Analyst based in Bangalore, India.
        
        I have an M B A in International Business and over 7 years of professional experience,
        including 3 years at I B M, where I support global sales, pricing approvals, and quote-to-cash execution.
        
        My expertise includes deal desk operations, revenue operations, accounts receivable management, 
        and cash application. I've successfully closed over 200 thousand dollars in receivable gaps 
        and improved quarterly cash flow.
        
        I'm passionate about optimizing business processes, reducing D S O, and partnering with 
        cross-functional teams to accelerate deal closures.
        
        Feel free to explore my portfolio to learn more about my experience, skills, and achievements. 
        Let's connect!
    `;
    
    // Voice toggle button click handler
    voiceToggle.addEventListener('click', () => {
        if (isSpeaking) {
            stopSpeaking();
        } else {
            startSpeaking(introductionText);
        }
    });
    
    // Start speaking function
    function startSpeaking(text) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();
        
        // Create new utterance
        currentUtterance = new SpeechSynthesisUtterance(text);
        
        // Configure voice settings
        currentUtterance.rate = 0.9; // Slightly slower for clarity
        currentUtterance.pitch = 1.0;
        currentUtterance.volume = 1.0;
        
        // Try to use a male voice
        const voices = speechSynthesis.getVoices();
        
        // Priority 1: Look for male voices specifically
        const maleVoice = voices.find(voice =>
            voice.lang.startsWith('en') &&
            (voice.name.toLowerCase().includes('male') ||
             voice.name.includes('David') ||
             voice.name.includes('Mark') ||
             voice.name.includes('James') ||
             voice.name.includes('Guy'))
        );
        
        // Priority 2: Look for Google/Microsoft male voices
        const qualityMaleVoice = voices.find(voice =>
            voice.lang.startsWith('en') &&
            !voice.name.toLowerCase().includes('female') &&
            (voice.name.includes('Google') || voice.name.includes('Microsoft'))
        );
        
        // Priority 3: Any English voice that's not explicitly female
        const anyMaleVoice = voices.find(voice =>
            voice.lang.startsWith('en') &&
            !voice.name.toLowerCase().includes('female') &&
            !voice.name.toLowerCase().includes('woman')
        );
        
        const preferredVoice = maleVoice || qualityMaleVoice || anyMaleVoice || voices.find(voice => voice.lang.startsWith('en'));
        
        if (preferredVoice) {
            currentUtterance.voice = preferredVoice;
            console.log('Using voice:', preferredVoice.name);
        }
        
        // Event handlers
        currentUtterance.onstart = () => {
            isSpeaking = true;
            voiceToggle.classList.add('speaking');
            avatar.classList.add('speaking');
            avatarMouth.classList.add('talking');
            voiceToggle.innerHTML = '<i class="fas fa-stop"></i><span>Stop Speaking</span>';
            
            // Add visual feedback
            gsap.to(avatar, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        };
        
        currentUtterance.onend = () => {
            stopSpeaking();
        };
        
        currentUtterance.onerror = (event) => {
            console.error('Speech synthesis error:', event);
            stopSpeaking();
        };
        
        // Animate mouth while speaking
        currentUtterance.onboundary = (event) => {
            if (event.name === 'word') {
                // Pulse animation on each word
                gsap.to(avatarMouth, {
                    scaleY: 1.2,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                });
            }
        };
        
        // Start speaking
        speechSynthesis.speak(currentUtterance);
    }
    
    // Stop speaking function
    function stopSpeaking() {
        speechSynthesis.cancel();
        isSpeaking = false;
        voiceToggle.classList.remove('speaking');
        avatar.classList.remove('speaking');
        avatarMouth.classList.remove('talking');
        voiceToggle.innerHTML = '<i class="fas fa-volume-up"></i><span>Listen to Introduction</span>';
        
        // Reset avatar scale
        gsap.to(avatar, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    }
    
    // Load voices (some browsers load voices asynchronously)
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            // Voices loaded
        };
    }
    
    // Auto-play introduction after page loads (optional - commented out by default)
    // Uncomment the next line if you want the avatar to speak automatically
    // setTimeout(() => startSpeaking(introductionText), 3000);
}

// ===================================
// Voice Control Keyboard Shortcut
// ===================================
document.addEventListener('keydown', (e) => {
    // Press 'V' key to toggle voice
    if (e.key === 'v' || e.key === 'V') {
        const voiceToggle = document.getElementById('voice-toggle');
        if (voiceToggle && !e.ctrlKey && !e.altKey && !e.metaKey) {
            // Check if not typing in an input field
            if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                voiceToggle.click();
            }
        }
    }
});
