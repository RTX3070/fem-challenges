const shareBtn = document.querySelector('.article .share-btn');
const socials = document.querySelector('.article .socials');

shareBtn.addEventListener('click', function() {
    this.classList.toggle('show');
    socials.classList.toggle('show');
});