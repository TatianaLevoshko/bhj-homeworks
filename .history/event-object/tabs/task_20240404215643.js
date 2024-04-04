document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".tab");
	const tabContents = document.querySelectorAll(".tab__content");

	tabs.forEach(tab, index) => {
		tab.addEventListener("click", function ()) {
			tabs.forEach(tab => tab.classList.remove("tab_active"));
			this.classList.add
		}
	}
})