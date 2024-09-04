// JavaScript to handle scroll, hover, and other effects on the navigation bar
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Change navbar background on scroll
    window.addEventListener("scroll", function () {
        // Toggle scrolled class on navbar
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            scrollTopBtn.style.display = "block"; // Show scroll-to-top button
        } else {
            navbar.classList.remove("scrolled");
            scrollTopBtn.style.display = "none"; // Hide scroll-to-top button
        }

        // Highlight active link based on scroll position
        let currentSection = "";
        document.querySelectorAll(".section").forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    // Scroll-to-Top button functionality
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
