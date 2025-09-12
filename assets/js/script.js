document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------
    // Star Field Generation
    // -----------------------------
    const starContainer = document.querySelector('.star-container');
    const numStars = 50;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star-icon');
        star.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `;

        const size = Math.random() * 8 + 4;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        starContainer.appendChild(star);
    }

    // -----------------------------
    // Mobile Menu
    // -----------------------------
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    mobileMenuCloseButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.nav-list-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // -----------------------------
    // Smooth Scrolling & Active Link Highlighting
    // -----------------------------
    const navLinks = document.querySelectorAll('.nav-item, .nav-list-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 80; // height of fixed header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active class
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Set active link on page load based on URL hash
    const currentHash = window.location.hash.substring(1);
    if (currentHash) {
        const activeLink = document.querySelector(`.nav-item[href="#${currentHash}"], .nav-list-link[href="#${currentHash}"]`);
        if (activeLink) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }
});