"use strict";
document.addEventListener('DOMContentLoaded', () => {
	const tooltips = document.querySelectorAll('.has-tooltip');

	tooltips.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();

			const rect = element.getBoundingClientRect();
			const bottom = rect.bottom;
			const right = rect.right;
			const left = rect.left;
			const top = rect.top;

			switch (position) {
				case 'bottom':
				  tooltipPos = `left: ${left}px; top: ${bottom}px; `;
				  break;
				case 'top':
				  tooltipPos = `left: ${left}px; bottom: ${window.innerHeight - top}px; `;
				  break;
				case 'left':
				  tooltipPos = `right: ${window.innerWidth - left}px; top: ${top}px; `;
				  break;
				case 'right':
				  tooltipPos = `left: ${right}px; top: ${top}px;`;
				  break;
			  }

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