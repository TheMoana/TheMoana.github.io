window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.section');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  });


//   Essai de carrousel sur les temoignages/

// Déclaration des variables
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carousel = document.querySelector('.testimonials-carousel');
const cards = document.querySelectorAll('.testimonial-card'); // Sélectionne toutes les cartes du carrousel
let currentIndex = 0; // L'index de la carte actuellement affichée

// Pour povoir déplacer le carrousel
function moveCarousel() {
  const offset = -currentIndex * (cards[0].offsetWidth + 30); // Calcule le décalage en fonction de l'index
  carousel.style.transform = `translateX(${offset}px)`; // Applique le décalage
}

// Boutons de navigation AVANT/APRES
prevBtn.addEventListener('click', () => { currentIndex = Math.max(0, currentIndex - 1); moveCarousel(); }); // "Précédent"
nextBtn.addEventListener('click', () => { currentIndex = Math.min(cards.length - 1, currentIndex + 1); moveCarousel(); }); // "Suivant"

// Initialisation du carrousel
moveCarousel();
