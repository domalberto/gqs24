// Alternar modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Aumentar e diminuir texto
const textSizeToggle = document.getElementById('text-size-toggle');
textSizeToggle.addEventListener('click', () => {
  document.body.classList.toggle('large-text');
});