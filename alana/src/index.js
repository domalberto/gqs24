function handleClick(sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  const offset = 80;
  const sectionPosition =
    section.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
}
