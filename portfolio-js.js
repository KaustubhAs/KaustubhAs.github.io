// Modern Portfolio JavaScript - Interactive Features

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after page loads
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
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

// Skills Section Horizontal Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const skillsGrid = document.querySelector('.skills-grid');
    
    if (skillsGrid) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Function to check if scrolling is needed
        const checkScrollNeeded = () => {
            const containerWidth = skillsGrid.offsetWidth;
            const scrollWidth = skillsGrid.scrollWidth;
            const needsScroll = scrollWidth > containerWidth;
            
            if (needsScroll) {
                skillsGrid.style.cursor = 'grab';
                skillsGrid.style.overflowX = 'auto';
                skillsGrid.style.justifyContent = 'flex-start';
            } else {
                skillsGrid.style.cursor = 'default';
                skillsGrid.style.overflowX = 'visible';
                skillsGrid.style.justifyContent = 'center';
            }
        };

        // Check on load and resize
        checkScrollNeeded();
        window.addEventListener('resize', checkScrollNeeded);

        // Mouse events for desktop
        skillsGrid.addEventListener('mousedown', (e) => {
            if (skillsGrid.scrollWidth <= skillsGrid.offsetWidth) return;
            
            isDown = true;
            skillsGrid.style.cursor = 'grabbing';
            startX = e.pageX - skillsGrid.offsetLeft;
            scrollLeft = skillsGrid.scrollLeft;
            e.preventDefault();
        });

        skillsGrid.addEventListener('mouseleave', () => {
            isDown = false;
            if (skillsGrid.scrollWidth > skillsGrid.offsetWidth) {
                skillsGrid.style.cursor = 'grab';
            } else {
                skillsGrid.style.cursor = 'default';
            }
        });

        skillsGrid.addEventListener('mouseup', () => {
            isDown = false;
            if (skillsGrid.scrollWidth > skillsGrid.offsetWidth) {
                skillsGrid.style.cursor = 'grab';
            } else {
                skillsGrid.style.cursor = 'default';
            }
        });

        skillsGrid.addEventListener('mousemove', (e) => {
            if (!isDown || skillsGrid.scrollWidth <= skillsGrid.offsetWidth) return;
            e.preventDefault();
            const x = e.pageX - skillsGrid.offsetLeft;
            const walk = (x - startX) * 2;
            skillsGrid.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        skillsGrid.addEventListener('touchstart', (e) => {
            if (skillsGrid.scrollWidth <= skillsGrid.offsetWidth) return;
            startX = e.touches[0].pageX - skillsGrid.offsetLeft;
            scrollLeft = skillsGrid.scrollLeft;
        });

        skillsGrid.addEventListener('touchmove', (e) => {
            if (!startX || skillsGrid.scrollWidth <= skillsGrid.offsetWidth) return;
            const x = e.touches[0].pageX - skillsGrid.offsetLeft;
            const walk = (x - startX) * 2;
            skillsGrid.scrollLeft = scrollLeft - walk;
        });

        skillsGrid.addEventListener('touchend', () => {
            startX = null;
        });

        // Wheel events for desktop scrolling
        skillsGrid.addEventListener('wheel', (e) => {
            if (skillsGrid.scrollWidth <= skillsGrid.offsetWidth) return;
            e.preventDefault();
            skillsGrid.scrollLeft += e.deltaY;
        });

        // Prevent text selection during drag
        skillsGrid.addEventListener('selectstart', (e) => {
            if (isDown) {
                e.preventDefault();
            }
        });
    }
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


// Timeline Animation Handler
function initTimeline() {
    const timelineCards = document.querySelectorAll('.timeline-card');
    const observerOptions = {
      threshold: 0.25,
      rootMargin: '0px'
    };
  
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${entry.target.dataset.index * 0.2}s`;
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);
  
    timelineCards.forEach((card, index) => {
      card.dataset.index = index;
      timelineObserver.observe(card);
    });
  }
  
  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', initTimeline);
  

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

// Modern Portfolio JavaScript - Interactive Features

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after page loads
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Navigation
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Typing animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after loading screen
    setTimeout(typeWriter, 2000);
}

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
};

// Intersection Observer for skill bars
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Scroll reveal animations
const revealElements = document.querySelectorAll('.section, .project-card, .cert-card, .timeline-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Project cards interaction
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click functionality for project details
    card.addEventListener('click', () => {
        // You can add modal or expand functionality here
        console.log('Project clicked:', card.querySelector('.project-title').textContent);
    });
});

// Certification cards hover effect
const certCards = document.querySelectorAll('.cert-card');

certCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                contactForm.innerHTML = "<p style='color: #10b981; font-size: 1.2em;'>Thank you for your message! I will get back to you soon.</p>";
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                });
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form");
        });
    });
}

// Parallax effect for hero section
const heroBackground = document.querySelector('.hero-particles');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items hover effect
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
        item.style.background = 'rgba(255, 255, 255, 0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
        item.style.background = 'rgba(255, 255, 255, 0.05)';
    });
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');

const animateTimeline = () => {
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
};

// Intersection Observer for timeline
const educationSection = document.querySelector('#education');
if (educationSection) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTimeline();
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineObserver.observe(educationSection);
}

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Hero stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounters = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 16);
    });
};

// Intersection Observer for hero stats
const heroSection = document.querySelector('#home');
if (heroSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateCounters, 1000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(heroSection);
}

// Add CSS for revealed animations
const style = document.createElement('style');
style.textContent = `
    .section, .project-card, .cert-card, .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .section.revealed, .project-card.revealed, .cert-card.revealed, .timeline-item.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item {
        transform: translateX(-50px);
    }
    
    .timeline-item.revealed {
        transform: translateX(0);
    }
    
    .skill-bar {
        width: 0 !important;
        transition: width 1.5s ease;
    }
`;

document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    revealOnScroll();
}, 100));

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Add focus management for accessibility
navLinks.forEach(link => {
    link.addEventListener('focus', () => {
        link.classList.add('focused');
    });
    
    link.addEventListener('blur', () => {
        link.classList.remove('focused');
    });
});

// Initialize all animations when page loads
window.addEventListener('load', () => {
    // Trigger initial reveal check
    revealOnScroll();
    
    // Add loaded class to body for additional styling
    document.body.classList.add('loaded');
});

// Add CSS for focused state
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .nav-link.focused {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    .btn:focus,
    .project-link:focus,
    .social-link:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    body.loaded .hero-content {
        animation: fadeInUp 1s ease 0.5s both;
    }
`;

document.head.appendChild(focusStyle);