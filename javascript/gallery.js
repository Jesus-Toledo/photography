document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox__img");
  const closeBtn = document.querySelector(".lightbox__close");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.getAttribute("src");
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });
});
