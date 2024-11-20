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

function handleSelectChange(select) {
  window.location.href = select.value;
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
  {
    src: "assets/galeria/robotica.jpg",
    alt: "3 alunos e 1 professora em uma aula de robôtica",
  },
  {
    src: "assets/galeria/aula-pratica.jpg",
    alt: "5 alunos em uma aula prática de redes",
  },
  {
    src: "assets/galeria/aula-pratica-2.jpg",
    alt: "Aluno realizando uma manutenção em um computador",
  },
  {
    src: "assets/galeria/aula-pratica-3.jpg",
    alt: "3 alunos em uma aula prática",
  },
  {
    src: "assets/galeria/aula-pratica-4.jpg",
    alt: "Alunos realizando uma manutenção em um computador",
  },
  {
    src: "assets/galeria/aula-pratica-5.jpg",
    alt: "Aluna realizando uma manutenção em um computador",
  },
  {
    src: "assets/galeria/sala-de-aula-1.jpg",
    alt: "Alunos em uma sala de aula",
  },
  {
    src: "assets/galeria/sala-de-aula-3.jpg",
    alt: "Alunos participam de uma conversa com profissionais da área",
  },
  { src: "assets/galeria/e-get.jpg", alt: "Palestra com o CEO da E-get" },
  { src: "assets/galeria/palestras.jpg", alt: "Alunos e profissionais da área durante semana acadêmica" },
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
    "w-full h-48 object-cover rounded-lg cursor-pointer bg-neutral-200 hover:scale-105 hover:shadow-lg transition-transform transition-shadow transition-border";

  img.addEventListener("click", () => {
    modalImage.src = image.src;
    modal.classList.remove("hidden");
    addKeydownActionToModal();
  });

  gallery.appendChild(img);
});

function removeListenerAndCloseModal() {
  modal.classList.add("hidden");
  window.removeEventListener("keydown", keydownListener);
}

closeModal.addEventListener("click", () => {
  removeListenerAndCloseModal();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    removeListenerAndCloseModal();
  }
});

const keydownListener = (event) => {
  if (event.key === "ArrowRight") {
    showNextImage();
  } else if (event.key === "ArrowLeft") {
    showPreviousImage();
  } else if (event.key === "Escape") {
    removeListenerAndCloseModal();
  }
};

function addKeydownActionToModal() {
  window.addEventListener("keydown", keydownListener);
}

closeModal.addEventListener("click", () => {
  removeListenerAndCloseModal();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    removeListenerAndCloseModal();
  }
});

function showNextImage() {
  const currentImageIndex = images.findIndex(
    (image) => image.src === getPathAfterAssets(modalImage.src)
  );
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  modalImage.src = images[nextImageIndex].src;
}

function showPreviousImage() {
  const currentImageIndex = images.findIndex(
    (image) => image.src === getPathAfterAssets(modalImage.src)
  );
  const prevImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;
  modalImage.src = images[prevImageIndex].src;
}

next.addEventListener("click", () => {
  showNextImage();
});

prev.addEventListener("click", () => {
  showPreviousImage();
});
