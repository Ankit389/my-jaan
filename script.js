// Floating Hearts Animation
function createFloatingHearts() {
    const container = document.body;
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 3000);
}

// Love Counter Animation
function animateCounters() {
    const counters = [
        { id: 'days', target: 365, suffix: '+' },
        { id: 'memories', target: 1000, suffix: '+' }
    ];
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            let current = 0;
            const increment = counter.target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= counter.target) {
                    current = counter.target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + counter.suffix;
            }, 20);
        }
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Dynamic Love Messages
const loveMessages = [
    "Pihu, tum ho meri zindagi ki sabse khubsurat dhadkan... 💕",
    "Har pal tumhare saath bitana hai meri khwaisah... 💝",
    "Tumhare muskurahat se roshan hai meri duniya... 💖",
    "Pihu, tum ho meri jaan, meri duniya, sab kuch... 💗",
    "Tumhare bina ek pal bhi adhoora lagta hai... 💕",
    "Meri Pihu, tum ho meri dhadkan, meri jaan... 💝",
    "Tumhare aankhon mein hi meri duniya basi hai... 💖",
    "Pihu, tumse hi meri zindagi ki har khushi hai... 💗"
];

function showRandomLoveMessage() {
    const messageElement = document.querySelector('.love-text');
    if (messageElement) {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        messageElement.style.opacity = '0';
        
        setTimeout(() => {
            messageElement.innerHTML = randomMessage;
            messageElement.style.opacity = '1';
        }, 500);
    }
}

// Interactive Love Calculator
function calculateLove() {
    const name1 = "Ankit";
    const name2 = "Pihu";
    
    // Simple love calculation algorithm
    const loveScore = Math.floor(Math.random() * 30) + 70; // 70-100%
    
    return {
        score: loveScore,
        message: getLoveMessage(loveScore)
    };
}

function getLoveMessage(score) {
    if (score >= 90) {
        return "Perfect Match! Made for each other! 💕";
    } else if (score >= 80) {
        return "True Love! Soulmates forever! 💝";
    } else if (score >= 70) {
        return "Beautiful Love! Meant to be! 💖";
    } else {
        return "Growing Love! Keep nurturing! 💗";
    }
}

// Particle Effect for Love
function createLoveParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.fontSize = '20px';
    particle.style.animation = 'float 2s ease-out forwards';
    particle.textContent = '❤️';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 2000);
}

// Add click effect for love
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn') || e.target.closest('.nav-link')) {
        createLoveParticle(e.clientX, e.clientY);
    }
});

// Time-based Greeting
function getLoveGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good Morning, Meri Pihu! 🌞";
    } else if (hour < 17) {
        greeting = "Good Afternoon, Meri Jaan! 🌤️";
    } else if (hour < 21) {
        greeting = "Good Evening, Meri Sweetheart! 🌅";
    } else {
        greeting = "Good Night, Meri Love! 🌙";
    }
    
    return greeting;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start floating hearts
    createFloatingHearts();
    
    // Animate counters
    setTimeout(animateCounters, 1000);
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Show random love messages every 10 seconds
    setInterval(showRandomLoveMessage, 10000);
    
    // Display greeting
    const greeting = getLoveGreeting();
    console.log(greeting);
    
    // Add welcome animation
    const body = document.body;
    body.style.opacity = '0';
    setTimeout(() => {
        body.style.transition = 'opacity 1s ease-in';
        body.style.opacity = '1';
    }, 100);
    
    // Love calculator on home page
    const loveCalcBtn = document.querySelector('.love-calc-btn');
    if (loveCalcBtn) {
        loveCalcBtn.addEventListener('click', function() {
            const result = calculateLove();
            const resultElement = document.querySelector('.love-result');
            if (resultElement) {
                resultElement.innerHTML = `
                    <h3>Love Score: ${result.score}%</h3>
                    <p>${result.message}</p>
                `;
                resultElement.style.display = 'block';
            }
        });
    }
    
    // Add parallax effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press 'L' for love message
        if (e.key === 'l' || e.key === 'L') {
            showRandomLoveMessage();
        }
        // Press 'H' for heart
        if (e.key === 'h' || e.key === 'H') {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createLoveParticle(x, y);
        }
    });
});

// Mobile responsiveness
function handleMobileView() {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

window.addEventListener('resize', handleMobileView);
handleMobileView();

// Photo Gallery Functions
function initPhotoGallery() {
    const photoInput = document.getElementById('photoInput');
    const galleryContainer = document.querySelector('.gallery-container');
    
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const files = Array.from(e.target.files);
            const placeholders = document.querySelectorAll('.photo-placeholder');
            
            files.forEach((file, index) => {
                if (index < placeholders.length && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        const placeholder = placeholders[index];
                        placeholder.innerHTML = `
                            <img src="${e.target.result}" alt="Memory with Pihu" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
                            <div class="photo-overlay">
                                <span class="photo-overlay-text">💕 Beautiful Memory 💕</span>
                            </div>
                        `;
                        placeholder.classList.remove('photo-placeholder');
                        placeholder.classList.add('photo-item');
                    };
                    
                    reader.readAsDataURL(file);
                }
            });
        });
    }
    
    // Add click functionality to placeholders
    document.querySelectorAll('.photo-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            document.getElementById('photoInput').click();
        });
    });
}

// Add photo gallery initialization
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Initialize photo gallery
    initPhotoGallery();
});

// Export functions for use in other files
window.LoveWebsite = {
    createFloatingHearts,
    showRandomLoveMessage,
    calculateLove,
    createLoveParticle,
    getLoveGreeting,
    initPhotoGallery
};
