const elementos = document.querySelectorAll(".scroll-effect");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  elementos.forEach((elemento) => {
    const elementoTop = elemento.offsetTop;
    const elementoHeight = elemento.offsetHeight;
    if (scrollPosition >= elementoTop - elementoHeight / 2) {
      elemento.classList.add("ativo");
    } else {
      elemento.classList.remove("ativo");
    }
  });
});