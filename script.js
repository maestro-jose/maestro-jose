// Configuración de WhatsApp orientada a Colombia por defecto para despliegue local
const CONFIG_WP = {
  phone: "50241805184",
  message:
    "Saludos Maestro Juan de los Santos. Solicito su guía y poder espiritual para una consulta privada.",
};

function getWhatsAppLink() {
  const baseUrl = "https://wa.me";
  return `${baseUrl}/${CONFIG_WP.phone}?text=${encodeURIComponent(CONFIG_WP.message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const wpUrl = getWhatsAppLink();

  // Asignar el enlace dinámico a todos los elementos con la clase .whatsapp-link
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = wpUrl;
  });

  // Control del Menú Móvil
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () =>
      navMenu.classList.toggle("active"),
    );

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-menu a").forEach((enlace) => {
      enlace.addEventListener("click", () =>
        navMenu.classList.remove("active"),
      );
    });
  }

  // Actualización automática del año en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Lazy Loading optimizado para imágenes de alto peso (altares, testimonios)
const observerOptions = {
  root: null,
  rootMargin: "50px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
      obs.unobserve(img);
    }
  });
}, observerOptions);

document
  .querySelectorAll("img[data-src]")
  .forEach((img) => observer.observe(img));
