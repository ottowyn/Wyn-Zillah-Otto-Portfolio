// simple mobile toggle and active link highlighting
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// highlight nav item based on scroll & reveal sections
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-list a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // nav highlighting
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
        // reveal animation
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.5 }
);
sections.forEach((sec) => observer.observe(sec));
