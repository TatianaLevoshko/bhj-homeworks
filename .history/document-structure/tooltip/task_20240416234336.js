"use strict";
document.addEventListener('DOMContentLoaded', () => {
	const tooltips = document / querySelectorAll('.has-tooltip');

	tooltips.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();

			const rect = element.getBoundingClientRect();
			const bottom = rect.bottom
			const right = rect.
			const left = rect.
			const top = rect.
		});
	});
});