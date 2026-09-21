/* =========================================================
   BLESSY GLORIYA PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


// Open menu
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}


// Close menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


/* =========================
   CLOSE MENU AFTER CLICKING
   A NAVIGATION LINK
   ========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

    });

});


/* =========================
   ACTIVE NAVIGATION LINK
   ========================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}

window.addEventListener("scroll", updateActiveLink);


/* =========================
   HEADER SHADOW
   ========================= */

const header = document.getElementById("header");

function updateHeader() {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(11, 31, 58, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", updateHeader);


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".experience-card, " +
    ".project-card, " +
    ".certificate-card, " +
    ".contact-card, " +
    ".contact-message"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-reveal");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
   ========================= */

const currentYear = new Date().getFullYear();

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} Blessy Gloriya. All rights reserved.`;

}


/* =========================
   INITIALIZE
   ========================= */

updateActiveLink();
updateHeader();