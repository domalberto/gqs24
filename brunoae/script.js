const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const todosElementos = document.querySelectorAll('*');

aumentarFonte.addEventListener('click', () => {
  todosElementos.forEach(elemento => {
    let style = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    elemento.style.fontSize = `${currentSize * 1.1}px`; // aumenta em 10%
  });
});

diminuirFonte.addEventListener('click', () => {
  todosElementos.forEach(elemento => {
    let style = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    elemento.style.fontSize = `${currentSize / 1.1}px`; // diminui em 10%
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



  $('.carousel').carousel({
    interval: 15000 // Intervalo em milissegundos
  });

