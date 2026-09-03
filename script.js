const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    const menuIsOpen = mainNav.classList.contains("active");

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});
/* ========================================
   QUOTE FORM - PORTFOLIO DEMO
======================================== */

const quoteForm = document.querySelector(".quote-form");
const quoteSuccessMessage = document.querySelector(".quote-success-message");

if (quoteForm && quoteSuccessMessage) {
    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        quoteSuccessMessage.classList.add("show");

        quoteForm.reset();

        quoteSuccessMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}
/* ========================================
   CONTACT FORM - PORTFOLIO DEMO
======================================== */

const contactForm = document.querySelector(".contact-form");
const contactSuccessMessage = document.querySelector(
    ".contact-success-message"
);

if (contactForm && contactSuccessMessage) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        contactSuccessMessage.classList.add("show");

        contactForm.reset();

        contactSuccessMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}