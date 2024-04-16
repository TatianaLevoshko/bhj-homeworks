"use strict";
document.addEventListener('DOMContentLoaded', () => {
	const positionMap = {
		bottom: (left, bottom) => `left: ${left}px; top: ${bottom}px;`,
		top: (left, top) => `left: ${left}px; bottom: ${window.innerHeight - top}px;`,
		left: (left, top) => `right: ${window.innerWidth - left}px; top: ${top}px;`,
		right: (right, top) => `left: ${right}px; top: ${top}px;`,
	}; 
	
	const tooltips = document / querySelectorAll('.has-tooltip');

	tooltips.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();

			const rect = element.getBoundingClientRect();
			const bottom = rect.bottom;
			const right = rect.right;
			const left = rect.left;
			const top = rect.top;
			
			const position = "bottom";
			const tooltipPosition = positionMap[position](left, top);

			const tooltipEl = `<div class="tooltip tooltip_active" style ="${tooltipPosition}">${element.title}</div>`;
		});
	});
});