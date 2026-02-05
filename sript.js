// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // Animate hamburger to X
    const lines = hamburger.querySelectorAll('span');
    lines[0].style.transform = navMenu.classList.contains('open') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    lines[1].style.opacity = navMenu.classList.contains('open') ? '0' : '1';
    lines[2].style.transform = navMenu.classList.contains('open') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
});

const service_card_section = document.querySelector('.services_cards_section');

window.addEventListener("wheel",(e) => {
  if(window.innerWidth <=900){
    const rect = service_card_section.getBoundingClientRect();

    if(rect.top < window.innerHeight && rect.botton > 0){
      e.preventDefault();
      service_card_section.scrollLeft += e.deltaY;
    }
  }
}, {passive: false});

const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));