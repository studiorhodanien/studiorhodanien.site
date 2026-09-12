/* ============================================
   STUDIO RHÔDANIEN - SCRIPT PRINCIPAL
   ============================================ */

// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
  // Marquer le lien actif dans la navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === '/')) {
      link.style.color = 'var(--color-gold)';
    }
  });

  // Lancer les interactions au chargement
  initVideoCarousel();
  initFormHandlers();
});

// ============================================
// CARROUSEL VIDÉOS HERO
// ============================================

function initVideoCarousel() {
  const videoElement = document.getElementById('videoHero');
  if (!videoElement) return;

  const videos = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4',
    'assets/videos/video3.mp4'
  ];

  let currentVideoIndex = 0;

  function playNextVideo() {
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
  }

  videoElement.addEventListener('ended', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    playNextVideo();
  });

  // Lancer la première vidéo
  playNextVideo();
}

// ============================================
// CARROUSEL VIDÉOS HERO
// ============================================

function initVideoCarousel() {
  const videoElement = document.getElementById('videoHero');
  if (!videoElement) return;

  const videos = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4',
    'assets/videos/video3.mp4'
  ];

  let currentVideoIndex = 0;

  function playNextVideo() {
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
  }

  videoElement.addEventListener('ended', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    playNextVideo();
  });

  playNextVideo();
}

// ============================================
// GESTION DES FORMULAIRES
// ============================================

function initFormHandlers() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Récupérer les données du formulaire
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Valider les données requises
      if (!data.name || !data.email || !data.message) {
        alert('Veuillez remplir tous les champs requis');
        return;
      }

      // Valider l'email
      if (!isValidEmail(data.email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
      }

      // Afficher un message de succès (en attente d'intégration backend)
      alert('Merci ! Votre message a été envoyé. On vous recontacte rapidement.');

      // Réinitialiser le formulaire
      this.reset();

      // Ici, vous pourriez envoyer les données à un serveur
      // Exemple avec Fetch API:
      // sendFormData(data);
    });
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ============================================
// UTILITAIRES
// ============================================

// Smooth scroll (déjà géré par CSS, mais au besoin)
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Animation au scroll (pour les impacts futurs)
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// ============================================
// FILTRAGE PORTFOLIO (placeholder)
// ============================================

function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Mettre à jour le bouton actif
      filterButtons.forEach(btn => btn.style.borderColor = 'var(--color-gold)');
      this.style.borderColor = 'var(--color-teal)';

      // Filtrer les projets
      portfolioItems.forEach(item => {
        if (filter === 'tous' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// ANALYTICS (optionnel)
// ============================================

// Exemple pour Google Analytics
// Remplacer GA_ID par votre ID Google Analytics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_ID');

// ============================================
// INIT AU CHARGEMENT
// ============================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeElements);
} else {
  observeElements();
}