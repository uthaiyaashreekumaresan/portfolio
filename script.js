/* ===================================
   Uthaiyaa Shree K — Portfolio Script
   Vanilla JavaScript Only
   =================================== */

(function () {
    'use strict';

    // ===================================
    // 1. PRELOADER
    // ===================================
    window.addEventListener('load', function () {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(function () {
                preloader.classList.add('loaded');
                // Remove from DOM after transition
                setTimeout(function () {
                    preloader.remove();
                }, 500);
            }, 400);
        }
    });

    // ===================================
    // 2. NAVBAR SCROLL EFFECT
    // ===================================
    var navbar = document.getElementById('mainNavbar');

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    // Initial check
    handleNavbarScroll();

    // ===================================
    // 3. MOBILE NAVBAR CLOSE ON LINK CLICK
    // ===================================
    var navLinks = document.querySelectorAll('#navMenu .nav-link, #navMenu .nav-cta');
    var navCollapse = document.getElementById('navMenu');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navCollapse && navCollapse.classList.contains('show')) {
                var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // ===================================
    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                var navbarHeight = navbar ? navbar.offsetHeight : 0;
                var targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // 5. SCROLL REVEAL (IntersectionObserver)
    // ===================================
    function initScrollReveal() {
        var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements immediately
            revealElements.forEach(function (el) {
                el.classList.add('active');
            });
            return;
        }

        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.15
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Add stagger delay for grouped elements
                    var el = entry.target;
                    var parent = el.parentElement;
                    if (parent) {
                        var siblings = parent.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
                        var index = Array.prototype.indexOf.call(siblings, el);
                        if (index > 0) {
                            el.style.transitionDelay = (index * 0.1) + 's';
                        }
                    }
                    el.classList.add('active');
                    observer.unobserve(el);
                }
            });
        }, observerOptions);

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // Initialize after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollReveal);
    } else {
        initScrollReveal();
    }

    // ===================================
    // 6. ACTIVE NAVIGATION HIGHLIGHTING
    // ===================================
    function updateActiveNav() {
        var sections = document.querySelectorAll('section[id]');
        var navLinksAll = document.querySelectorAll('#navMenu .nav-link');
        var scrollPos = window.scrollY + 120;

        var currentSection = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(function (link) {
            link.classList.remove('active');
            var href = link.getAttribute('href');
            if (href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ===================================
    // 7. BACK TO TOP BUTTON
    // ===================================
    var backToTopBtn = document.getElementById('backToTop');

    function handleBackToTop() {
        if (!backToTopBtn) return;
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleBackToTop);

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // 8. CONTACT FORM VALIDATION
    // ===================================
    var contactForm = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Reset previous success
            if (formSuccess) {
                formSuccess.style.display = 'none';
            }

            // Validate email format
            var emailInput = document.getElementById('contactEmail');
            if (emailInput && emailInput.value) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value)) {
                    emailInput.setCustomValidity('Please enter a valid email address.');
                } else {
                    emailInput.setCustomValidity('');
                }
            }

            // Check Bootstrap validation
            if (contactForm.checkValidity()) {
                // Show success
                if (formSuccess) {
                    formSuccess.style.display = 'block';
                }

                // Reset form
                contactForm.reset();
                contactForm.classList.remove('was-validated');

                // Hide success after 5 seconds
                setTimeout(function () {
                    if (formSuccess) {
                        formSuccess.style.display = 'none';
                    }
                }, 5000);
            } else {
                contactForm.classList.add('was-validated');
            }
        });

        // Real-time email validation
        var emailField = document.getElementById('contactEmail');
        if (emailField) {
            emailField.addEventListener('input', function () {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailPattern.test(this.value)) {
                    this.setCustomValidity('Please enter a valid email address.');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
    }

    // ===================================
    // 9. SCROLL PROGRESS (optional)
    // ===================================
    // Subtle scroll progress tracking
    // Not adding a visible progress bar to keep the design minimal

    // ===================================
    // 10. PERFORMANCE: Throttle scroll events
    // ===================================
    var scrollTicking = false;

    function onScroll() {
        if (!scrollTicking) {
            window.requestAnimationFrame(function () {
                handleNavbarScroll();
                updateActiveNav();
                handleBackToTop();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    // Replace individual scroll listeners with throttled version
    window.removeEventListener('scroll', handleNavbarScroll);
    window.removeEventListener('scroll', updateActiveNav);
    window.removeEventListener('scroll', handleBackToTop);
    window.addEventListener('scroll', onScroll, { passive: true });

})();
