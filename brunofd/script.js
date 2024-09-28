// Função para alternar a visibilidade do conteúdo
function toggleContent(category) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}

// Adiciona evento de clique aos links do menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent(this.dataset.category);
    });
});

// Inicializa a primeira categoria como ativa
document.querySelector('.menu a').click();

// Função para alternar slides na galeria
function setupGallery(content) {
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
}

// Configura a galeria para cada conteúdo
document.querySelectorAll('.content').forEach(content => {
    setupGallery(content);
});
