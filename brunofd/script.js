document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        document.getElementById(this.dataset.category).classList.add('active');
    });
});

// Inicializa a primeira categoria como ativa
document.querySelector('.menu a').click();

document.querySelectorAll('.content').forEach(content => {
    const slides = content.querySelectorAll('.gallery img');
    let currentSlide = 0;

    content.querySelector('.prev').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    content.querySelector('.next').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });
});
