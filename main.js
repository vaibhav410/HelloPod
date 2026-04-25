// HelloPod Animation Engine
gsap.registerPlugin(ScrollTrigger);

// Mobile menu
var mobileMenuBtn = document.getElementById('mobile-menu-btn');
var mobileMenu = document.getElementById('mobile-menu');
var mobileMenuClose = document.getElementById('mobile-menu-close');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
  });
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  }
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Nav scroll
var navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function() {
    navbar.style.background = window.scrollY > 80 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)';
  });
}

// Section reveals
document.querySelectorAll('section').forEach(function(section, i) {
  gsap.from(section, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: section, start: 'top 85%' }
  });
});

// Card stagger
document.querySelectorAll('.grid > div').forEach(function(card, i) {
  gsap.from(card, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1,
    scrollTrigger: { trigger: card.closest('.grid'), start: 'top 80%' }
  });
});

// Stats counter
var statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
  ScrollTrigger.create({
    trigger: '.stat-number',
    start: 'top 80%',
    once: true,
    onEnter: function() {
      statNumbers.forEach(function(num) {
        var target = parseFloat(num.dataset.target);
        var suffix = num.dataset.suffix || '';
        var obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            num.textContent = Math.round(obj.val) + suffix;
          }
        });
      });
    }
  });
}

console.log('HelloPod - Animation Engine Loaded');