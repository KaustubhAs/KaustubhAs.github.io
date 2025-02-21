// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation for hero section
const text = "Master's Student | Data Scientist | Software Engineer";
const typingText = document.querySelector('.typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    typingText.textContent = '';
    setTimeout(typeWriter, 1000);
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('section');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 150) {
            element.classList.add('revealed');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', reveal);

// Navbar background change on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking outside
navOverlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const projectCards = document.querySelectorAll('.project-card');
//     const body = document.body;

//     projectCards.forEach(card => {
//         // Get elements
//         const cardDetails = card.querySelector('.card-details');
//         const closeBtn = card.querySelector('.close-details');

//         // Open card details on card click
//         card.addEventListener('click', (e) => {
//             e.preventDefault();
//             openCard(cardDetails);
//         });

//         // Close card details
//         closeBtn.addEventListener('click', (e) => {
//             e.stopPropagation(); // Prevent card click when clicking close button
//             closeCard(cardDetails);
//         });

//         // Close on outside click
//         cardDetails.addEventListener('click', (e) => {
//             if (e.target === cardDetails) {
//                 closeCard(cardDetails);
//             }
//         });

//         // Close on ESC key
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'Escape') {
//                 const activeCard = document.querySelector('.card-details.active');
//                 if (activeCard) {
//                     closeCard(activeCard);
//                 }
//             }
//         });

//          // Helper functions
//         function openCard(cardDetails) {
//             cardDetails.classList.add('active');
//             body.style.overflow = 'hidden'; // Prevent background scrolling
//         }

//         function closeCard(cardDetails) {
//             cardDetails.classList.remove('active');
//             body.style.overflow = 'auto'; // Restore scrolling
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const body = document.body;

    projectCards.forEach(card => {
        const closeBtn = card.querySelector('.close-details');
        const cardDetails = card.querySelector('.card-details');

        // Make entire card clickable
        card.addEventListener('click', () => {
            cardDetails.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close card details
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering card click when closing
            cardDetails.classList.remove('active');
            body.style.overflow = 'auto'; // Restore scrolling
        });

        // Close on outside click
        cardDetails.addEventListener('click', (e) => {
            if (e.target === cardDetails) {
                cardDetails.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cardDetails.classList.contains('active')) {
                cardDetails.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    });
});




// // Project Cards Interaction
// document.addEventListener('DOMContentLoaded', () => {
//     const projectCards = document.querySelectorAll('.project-card');
//     const body = document.body;

//     projectCards.forEach(card => {
//         // Get elements
//         const readMoreBtn = card.querySelector('.read-more');
//         const closeBtn = card.querySelector('.close-details');
//         const cardDetails = card.querySelector('.card-details');

//         // Open card details
//         readMoreBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             openCard(cardDetails);
//         });

//         // Close card details
//         closeBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             closeCard(cardDetails);
//         });

//         // Close on outside click
//         cardDetails.addEventListener('click', (e) => {
//             if (e.target === cardDetails) {
//                 closeCard(cardDetails);
//             }
//         });
//     });

//     // Close on ESC key
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape') {
//             const activeCard = document.querySelector('.card-details.active');
//             if (activeCard) {
//                 closeCard(activeCard);
//             }
//         }
//     });

//     // Helper functions
//     function openCard(cardDetails) {
//         cardDetails.classList.add('active');
//         body.style.overflow = 'hidden'; // Prevent background scrolling
//     }

//     function closeCard(cardDetails) {
//         cardDetails.classList.remove('active');
//         body.style.overflow = 'auto'; // Restore scrolling
//     }
// });

// Resize handler
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 767) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }, 250);
});

// Optional: Add touch event handling for mobile devices
let touchStartY;
document.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', e => {
    if (!touchStartY) {
        return;
    }
    
    const touchEndY = e.touches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    // If scrolling down, hide the navbar
    if (diff > 50) {
        nav.style.transform = 'translateY(-100%)';
    }
    // If scrolling up, show the navbar
    else if (diff < -50) {
        nav.style.transform = 'translateY(0)';
    }
    
    touchStartY = null;
});




// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Typing animation for hero section
// const text = "Master's Student | AI/ML Explorer | Data Science Enthusiast";
// const typingText = document.querySelector('.typing-text');
// let i = 0;

// function typeWriter() {
//     if (i < text.length) {
//         typingText.textContent += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100);
//     }
// }

// // Start typing animation when page loads
// window.addEventListener('load', () => {
//     typingText.textContent = '';
//     setTimeout(typeWriter, 1000);
// });

// // Reveal animations on scroll
// const revealElements = document.querySelectorAll('section');

// function reveal() {
//     revealElements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
        
//         if (elementTop < windowHeight - 150) {
//             element.classList.add('revealed');
//         }
//     });
// }

// // Add scroll event listener
// window.addEventListener('scroll', reveal);

// // Navbar background change on scroll
// const nav = document.querySelector('nav');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) {
//         nav.style.background = 'rgba(255, 255, 255, 0.98)';
//         nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
//     } else {
//         nav.style.background = 'rgba(255, 255, 255, 0.95)';
//         nav.style.boxShadow = 'none';
//     }
// });

// // Skill bars animation
// const skillItems = document.querySelectorAll('.skill-items span');

// skillItems.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         item.style.transform = 'scale(1.1)';
//     });
    
//     item.addEventListener('mouseout', () => {
//         item.style.transform = 'scale(1)';
//     });
// });

// // Project cards hover effect
// const projectCards = document.querySelectorAll('.project-card');

// projectCards.forEach(card => {
//     card.addEventListener('mouseover', () => {
//         card.style.transform = 'translateY(-10px)';
//         card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
//     });
    
//     card.addEventListener('mouseout', () => {
//         card.style.transform = 'translateY(0)';
//         card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
//     });
// });

// // Certification cards animation
// const certCards = document.querySelectorAll('.cert-card');

// certCards.forEach(card => {
//     card.addEventListener('click', () => {
//         card.classList.add('certificate-pulse');
//         setTimeout(() => {
//             card.classList.remove('certificate-pulse');
//         }, 1000);
//     });
// });

// // Add loading animation
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

// // Intersection Observer for section animations
// const observerOptions = {
//     threshold: 0.25,
//     rootMargin: '0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('in-view');
//             if (entry.target.classList.contains('skill-items')) {
//                 entry.target.querySelectorAll('span').forEach((skill, index) => {
//                     setTimeout(() => {
//                         skill.style.opacity = '1';
//                         skill.style.transform = 'translateY(0)';
//                     }, index * 100);
//                 });
//             }
//         }
//     });
// }, observerOptions);

// // Observe all sections and skill items
// document.querySelectorAll('section, .skill-items').forEach(section => {
//     observer.observe(section);
// });

// // Handle form submissions (if you add a contact form later)
// const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form handling logic here
// };

// // Error handling
// window.addEventListener('error', (e) => {
//     console.error('An error occurred:', e.error);
// });

// // Performance optimization
// let isScrolling;
// window.addEventListener('scroll', () => {
//     window.clearTimeout(isScrolling);
//     isScrolling = setTimeout(() => {
//         console.log('Scroll ended');
//     }, 150);
// }, false);

// // ... (keep all existing JavaScript from before) ...

// // Mobile Menu Functionality
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// const navOverlay = document.querySelector('.nav-overlay');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navLinks.classList.toggle('active');
//     navOverlay.classList.toggle('active');
//     document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
// });

// // Close mobile menu when clicking outside
// navOverlay.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navLinks.classList.remove('active');
//     navOverlay.classList.remove('active');
//     document.body.style.overflow = 'auto';
// });

// // Close mobile menu when clicking a link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         navLinks.classList.remove('active');
//         navOverlay.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     });
// });

// // Resize handler
// let resizeTimer;
// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         if (window.innerWidth > 767) {
//             hamburger.classList.remove('active');
//             navLinks.classList.remove('active');
//             navOverlay.classList.remove('active');
//             document.body.style.overflow = 'auto';
//         }
//     }, 250);
// });

// // Optional: Add touch event handling for mobile devices
// let touchStartY;
// document.addEventListener('touchstart', e => {
//     touchStartY = e.touches[0].clientY;
// });

// document.addEventListener('touchmove', e => {
//     if (!touchStartY) {
//         return;
//     }
    
//     const touchEndY = e.touches[0].clientY;
//     const diff = touchStartY - touchEndY;
    
//     // If scrolling down, hide the navbar
//     if (diff > 50) {
//         nav.style.transform = 'translateY(-100%)';
//     }
//     // If scrolling up, show the navbar
//     else if (diff < -50) {
//         nav.style.transform = 'translateY(0)';
//     }
    
//     touchStartY = null;
// });

// // Project Cards Interaction
// document.addEventListener('DOMContentLoaded', () => {
//     const projectCards = document.querySelectorAll('.project-card');
//     const body = document.body;

//     projectCards.forEach(card => {
//         const readMoreBtn = card.querySelector('.read-more');
//         const closeBtn = card.querySelector('.close-details');
//         const cardDetails = card.querySelector('.card-details');

//         // Hover effect
//         card.addEventListener('mouseenter', () => {
//             card.classList.add('hover');
//         });

//         card.addEventListener('mouseleave', () => {
//             card.classList.remove('hover');
//         });

//         // Open card details
//         readMoreBtn.addEventListener('click', (e) => {
//             e.stopPropagation();
//             cardDetails.classList.add('active');
//             card.classList.add('active');
//             body.style.overflow = 'hidden'; // Prevent background scrolling
//         });

//         // Close card details
//         closeBtn.addEventListener('click', (e) => {
//             e.stopPropagation();
//             cardDetails.classList.remove('active');
//             card.classList.remove('active');
//             body.style.overflow = 'auto'; // Restore scrolling
//         });

//         // Close on outside click
//         cardDetails.addEventListener('click', (e) => {
//             if (e.target === cardDetails) {
//                 cardDetails.classList.remove('active');
//                 card.classList.remove('active');
//                 body.style.overflow = 'auto';
//             }
//         });

//         // Close on ESC key
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'Escape' && cardDetails.classList.contains('active')) {
//                 cardDetails.classList.remove('active');
//                 card.classList.remove('active');
//                 body.style.overflow = 'auto';
//             }
//         });
//     });
// });