
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    const lines = hamburger.querySelectorAll('span');
    lines[0].style.transform = navMenu.classList.contains('open') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    lines[1].style.opacity = navMenu.classList.contains('open') ? '0' : '1';
    lines[2].style.transform = navMenu.classList.contains('open') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
});
