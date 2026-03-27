document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('servicesSlider');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');

  if (!slider || !prevBtn || !nextBtn) return;

  const cards = slider.querySelectorAll('.service-card');
  const total = cards.length;
  const visibleCount = 3; // cards visible at once
  let currentIndex = 0;
  const maxIndex = total - visibleCount;

  function getCardWidth() {
    const card = cards[0];
    const gap = 24;
    return card.offsetWidth + gap;
  }

  function updateSlider() {
    const offset = currentIndex * getCardWidth();
    slider.style.transform = `translateX(-${offset}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider();

  // Recalculate on resize
  window.addEventListener('resize', function () {
    updateSlider();
    if (updateRSlider) updateRSlider();
  });

  // Reviews Slider
  const reviewsSlider = document.getElementById('reviewsSlider');
  const reviewsPrevBtn = document.getElementById('reviewsPrev');
  const reviewsNextBtn = document.getElementById('reviewsNext');

  let updateRSlider;

  if (reviewsSlider && reviewsPrevBtn && reviewsNextBtn) {
    const rCards = reviewsSlider.querySelectorAll('.review-card');
    const rTotal = rCards.length;
    let rCurrentIndex = 0;
    // We scroll one card at a time. The visible part might reveal pieces of adjacent cards.
    const rMaxIndex = Math.max(0, rTotal - 1);

    function getRCardWidth() {
      const card = rCards[0];
      const gap = 92;
      return card.offsetWidth + gap;
    }

    updateRSlider = function() {
      const offset = rCurrentIndex * getRCardWidth();
      reviewsSlider.style.transform = `translateX(-${offset}px)`;
      reviewsPrevBtn.disabled = rCurrentIndex === 0;
      reviewsNextBtn.disabled = rCurrentIndex >= rMaxIndex;
    };

    reviewsPrevBtn.addEventListener('click', function () {
      if (rCurrentIndex > 0) {
        rCurrentIndex--;
        updateRSlider();
      }
    });

    reviewsNextBtn.addEventListener('click', function () {
      if (rCurrentIndex < rMaxIndex) {
        rCurrentIndex++;
        updateRSlider();
      }
    });

    updateRSlider();
  }

  // Burger Menu Logic
  const burger = document.querySelector('.header-burger');
  const navList = document.querySelector('.header-nav-list');
  const navLinks = document.querySelectorAll('.header-nav a');

  if (burger && navList) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      navList.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
        burger.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Smooth scroll for footer links
  const footerLinks = document.querySelectorAll('.footer-nav a, .footer-logo');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // CTA button logic
  const contactButtons = document.querySelectorAll(
    '.header-cta-btn, .hero-content .button, .services-btn-primary, .advantages-btn-primary, .education-btn, .contact-btn, .service-card-btn'
  );
  const reviewsButtons = document.querySelectorAll(
    '.services-btn-secondary, .advantages-btn-secondary'
  );

  contactButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  reviewsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const reviewsSection = document.getElementById('reviews');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
