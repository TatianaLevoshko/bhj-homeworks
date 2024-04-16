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
			
			const position = "bottom";
			const tooltipPosition = positionMap[position](left, top);

			const tooltipEl = `<div class="tooltip tooltip_active" style ="${tooltipPosition}">${element.title}</div>`;
			const openedTooltip = document.querySelector('.tooltip_active');

			if (!openedTooltip) {
				element.insertAdjacentHTML("afterend", tooltipEl);
			}
			if (openedTooltip && openedTooltip.innerText !== element.title) {
				openedTooltip.remove();
				element.insertAdjacentHTML("afterend", tooltipEl);
			}
			if (openedTooltip && openedTooltip.innerText === element.title) {
				openedTooltip.remove();
			  }
		});
	});
});