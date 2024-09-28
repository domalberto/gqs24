const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const corpo = document.body;

let tamanhoFonte = 16;

aumentarFonte.addEventListener('click', () => {
  tamanhoFonte += 2;
  corpo.style.fontSize = `${tamanhoFonte}px`;
});

diminuirFonte.addEventListener('click', () => {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    corpo.style.fontSize = `${tamanhoFonte}px`;
  }
});