// SCROLL EFFECT
window.addEventListener("scroll", function() {
  let nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// MOBILE MENU TOGGLE
let toggle = document.getElementById("menu-toggle");
let links = document.querySelector(".nav-links");

toggle.addEventListener("click", function() {
  links.classList.toggle("active");
});

function showVeg() {
  let vegItems = document.querySelectorAll(".veg");
  let nonVegItems = document.querySelectorAll(".nonveg");

  vegItems.forEach(item => item.style.display = "inline-block");
  nonVegItems.forEach(item => item.style.display = "none");
}

function showNonVeg() {
  let vegItems = document.querySelectorAll(".veg");
  let nonVegItems = document.querySelectorAll(".nonveg");

  vegItems.forEach(item => item.style.display = "none");
  nonVegItems.forEach(item => item.style.display = "inline-block");
}

let elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (position < screen - 100) {
      el.classList.add("show");
    }
  });
});