// Когда DOM загружен и готов к манипуляциям,выполняем функцию
document.addEventListener("DOMContentLoaded", function () {
	// Получаем все элементы вкладок и содержимое
	const tabs = document.querySelectorAll(".tab");
	const tabContents = document.querySelectorAll(".tab__content");
	// Для каждой вкладки устанавливаем ОС клик
	tabs.forEach((tab, index) => {
		tab.addEventListener("click", function () {
			// Удаляем класс активной вкладки у всех вкладок
			tabs.forEach(tab => tab.classList.remove("tab_active"));
			// Добавляем класс активной вкладки той, на которую кликнули
			this.classList.add("tab_active");
			// Скрываем все содержимое 
			tabContents.forEach(content => content.style.display = "none");
			tabContents[index].style.display = "block";
		});
	});
});