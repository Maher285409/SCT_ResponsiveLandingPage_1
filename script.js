const filterChips = document.querySelectorAll(".filter-chip");
const foodItems = document.querySelectorAll(".food-item");

filterChips.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterChips.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    foodItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 80); // 🔥 cinematic stagger
    }
  });
});

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 60) {
    nav.style.background = "rgba(0,0,0,0.95)";
    nav.style.backdropFilter = "blur(15px)";
    nav.style.padding = "10px 40px";
  } else {
    nav.style.background = "rgba(0,0,0,0.4)";
    nav.style.padding = "20px 60px";
  }
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});