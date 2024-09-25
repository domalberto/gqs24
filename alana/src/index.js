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

function getPathAfterAssets(url) {
  const assetsIndex = url.indexOf("assets");

  if (assetsIndex !== -1) {
    return url.substring(assetsIndex);
  } else {
    return url;
  }
}

const images = [
  {
    src: "assets/galeria/visita-bat.jpg",
    alt: "Visita à empresa fumageira BAT",
  },
  {
    src: "assets/galeria/visita-imply.jpg",
    alt: "Visita à empresa de tecnologia Imply",
  },
  { src: "assets/galeria/robotica.jpg", alt: "Aula de robótica" },
  { src: "assets/galeria/aula-pratica.jpg", alt: "Aula prática" },
  { src: "assets/galeria/aula-pratica-2.jpg", alt: "Aula prática" },
  { src: "assets/galeria/aula-pratica-3.jpg", alt: "Aula prática" },
  { src: "assets/galeria/aula-pratica-4.jpg", alt: "Aula prática" },
  { src: "assets/galeria/aula-pratica-5.jpg", alt: "Aula prática" },
  {
    src: "assets/galeria/sala-de-aula-1.jpg",
    alt: "Laboratório de informática",
  },
  { src: "assets/galeria/sala-de-aula-3.jpg", alt: "Sala de aula" },
  { src: "assets/galeria/e-get.jpg", alt: "Palestra CEO E-get" },
  { src: "assets/galeria/palestras.jpg", alt: "Visita à empresa Imprensa" },
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

images.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  img.classList =
    "w-full h-48 object-cover rounded-lg cursor-pointer bg-neutral-200";

  img.addEventListener("click", () => {
    modalImage.src = image.src;
    modal.classList.remove("hidden");
  });

  gallery.appendChild(img);
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

next.addEventListener("click", () => {
  const currentImageIndex = images.findIndex(
    (image) => image.src === getPathAfterAssets(modalImage.src)
  );
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  modalImage.src = images[nextImageIndex].src;
});

prev.addEventListener("click", () => {
  const currentImageIndex = images.findIndex(
    (image) => image.src === getPathAfterAssets(modalImage.src)
  );
  const prevImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;
  modalImage.src = images[prevImageIndex].src;
});
