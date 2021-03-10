const shareIcon = document.querySelector('.share-icon');
const socialIcons = document.querySelector('.socials');

shareIcon.addEventListener('click', () => {
    if (shareIcon.classList.contains('close')) {
        if (window.innerWidth <= 1440) {
            shareIcon.classList.replace('close', 'open');
            socialIcons.classList.add('show');    
        } else {
            shareIcon.classList.replace('close', 'open');
            shareIcon.style.backgroundColor = 'var(--very-dark-grayish-blue)';
            socialIcons.classList.add('show');
        };
    } else {
        shareIcon.classList.replace('open', 'close');
        shareIcon.style.backgroundColor = 'var(--light-grayish-blue)';
        socialIcons.classList.remove('show');
    };
})

window.addEventListener('click', e => {
    if (e.target.tagName === 'BODY' && shareIcon.classList.contains('open')) {
        shareIcon.classList.replace('open', 'close');
        shareIcon.style.backgroundColor = 'var(--light-grayish-blue)';
        socialIcons.classList.remove('show');
    };
});