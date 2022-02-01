const qaContainers = document.querySelectorAll('.accordion-container .second-section .qa-container');

qaContainers.forEach((question, i) => {
    question.addEventListener('click', () => {
        question.classList.toggle('show');
        qaContainers.forEach((answer, idx) => {
            if (idx !== i && answer.classList.contains('show')) {
                answer.classList.remove('show');
            }
        })
    });
});