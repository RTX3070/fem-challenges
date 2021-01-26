const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mob-menu');

if (mobileMenu.className == 'show') {
    mobileMenu.classList.remove('show');
};

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});