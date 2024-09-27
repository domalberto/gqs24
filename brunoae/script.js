// Seleciona todos os links da navbar
const links = document.querySelectorAll('.navbar-nav .nav-link');

// Adiciona um evento de scroll à janela
window.addEventListener('scroll', () => {
  // Verifica qual link está atualmente visível na página
  const visibleLink = links.find(link => {
    const linkId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(linkId);
    const sectionRect = section.getBoundingClientRect();
    return sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
  });

  // Remove a classe 'active' de todos os links
  links.forEach(l => l.classList.remove('active'));

  // Adiciona a classe 'active' ao link visível
  if (visibleLink) {
    visibleLink.classList.add('active');
  }
});