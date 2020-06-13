let hamburger = document.querySelector(".hamburger");
let navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
	navItems.classList.toggle("visible");
	hamburger.classList.toggle("cross");
});
