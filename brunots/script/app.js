const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const totalSlides = slides.length - 1; // Ajuste para lidar com o índice correto (0 a totalSlides)

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(-index) * 100}%)`;
        slide.setAttribute('aria-hidden', i !== index);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1);
    if (currentIndex > totalSlides) {
        currentIndex = 0; // Reinicia ao primeiro slide
    }
    showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1);
    if (currentIndex < 0) {
        currentIndex = totalSlides; // Volta ao último slide
    }
    showSlide(currentIndex);
});

// Exibir o slide inicial
showSlide(currentIndex);

function togglePeriodo(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}