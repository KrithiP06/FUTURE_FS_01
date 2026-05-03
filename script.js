// Reveal animation
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


// Contact form (user input)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});
