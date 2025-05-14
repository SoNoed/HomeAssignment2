    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

const mobile = window.matchMedia("(max-width: 767px)");
const tablet = window.matchMedia("(min-width: 768px)");
const smallDesktop = window.matchMedia("(min-width: 992px)");
const largeDesktop = window.matchMedia("(min-width: 1200px)");
