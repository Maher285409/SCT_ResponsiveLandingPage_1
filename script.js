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