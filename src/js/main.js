document.addEventListener("DOMContentLoaded", () => {
	const navMenu = document.querySelectorAll(".nav_depth1 .list_depth1");

	navMenu.forEach((item, idx) => {
		item.addEventListener("mouseenter", function () {
			this.classList.add("active");
		});
		item.addEventListener("mouseleave", function () {
			this.classList.remove("active");
		});
	});
});
