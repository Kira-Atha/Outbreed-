"use strict";

document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header?.classList.remove("nav-open");
        navToggle?.setAttribute("aria-expanded", "false");
    });
});

document.querySelectorAll("[data-media] img[data-source]").forEach((image) => {
    const container = image.closest("[data-media]");
    image.addEventListener("load", () => container?.classList.add("is-loaded"), { once: true });
    image.addEventListener("error", () => image.removeAttribute("src"), { once: true });
    image.src = image.dataset.source;
});

document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
});

const revealTargets = [...document.querySelectorAll("[data-reveal]")];
if (reducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

    revealTargets.forEach((target) => revealObserver.observe(target));
}

const observedSections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.hash === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: "-35% 0px -55%", threshold: 0 });

    observedSections.forEach((section) => sectionObserver.observe(section));
}
