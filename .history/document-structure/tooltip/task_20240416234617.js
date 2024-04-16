"use strict";
document.addEventListener('DOMContentLoaded', () => {
	const tooltips = document / querySelectorAll('.has-tooltip');

	tooltips.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();

			const rect = element.getBoundingClientRect();
			const bottom = rect.bottom;
			const right = rect.right;
			const left = rect.left;
			const top = rect.top;

			const tooltipPosition;
			const position = 'bottom'
		});
	});
});