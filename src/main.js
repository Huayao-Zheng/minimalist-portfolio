const menu = document.querySelector('.nav__list');
const menuToggler = document.querySelector('.nav__menu-toggler');

menuToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
    const hamburger = 'bx-menu';
    const X = 'bx-x';

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.style.display = 'none';

        menuToggler.classList.add(hamburger);
        menuToggler.classList.remove(X);
    } else {
        menu.classList.add('active');
        menu.style.display = 'flex';

        menuToggler.classList.remove(hamburger);
        menuToggler.classList.add(X);
    }
}
