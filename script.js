// Animation d’apparition douce au scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".container").forEach(section => {
    const pos = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pos < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial style pour les effets
document.querySelectorAll(".container").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease-out";
});
