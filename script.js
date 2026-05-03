// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


// Reveal on scroll (fade in sections)
const sections = document.querySelectorAll(".section, .about");

function reveal() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);


// Initial hidden state
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.6s ease";
});


// Navbar shrink on scroll (premium feel)
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.padding = "10px 60px";
    nav.style.background = "#f4f1ee";
  } else {
    nav.style.padding = "20px 60px";
    nav.style.background = "transparent";
  }
});
