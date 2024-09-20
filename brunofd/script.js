document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
        document.getElementById(this.dataset.category).classList.add('active');
        document.querySelector(`#${this.dataset.category} .slide`).classList.add('active');
    });
});

let currentSlide = 0;
setInterval(() => {
    const activeContent = document.querySelector('.content.active');
    if (activeContent) {
        const slides = activeContent.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}, 3000);
