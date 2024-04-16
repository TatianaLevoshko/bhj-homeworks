"use strict";
document.addEventListener('DOMContentLoaded', () => {
	// ссылка на элемент подсказки
	const link = document.querySelector(".has-tooltip");
	const tooltip = document.querySelector(".tooltip");
	// обработчик событий наведения мышкой на ссылку
	link.addEventListener("mouseover", () => {
		// добавляем класс для активации подсказки
		tooltip.classList.add("tooltip_active");
	});
	// обработчик событий ухода мыши со ссылки
	link.addEventListener("mouseover", () => {
		// удаляем класс для дезактивации подсказки
		tooltip.classList.add("tooltip_active");
	});
	// обр.соб. клика на ссылку
	link.addEventListener("click", (event) => {
		// запрет стандартного действия перехода по ссылке
		event.preventDefault();
	});
}
