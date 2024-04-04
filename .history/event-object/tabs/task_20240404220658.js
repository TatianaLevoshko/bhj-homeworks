// Когда DOM загружен и готов к манипуляциям,выполняем функцию
document.addEventListener("DOMContentLoaded", function () {
	// Получаем все элементы вкладок и содержимое
	const tabs = document.querySelectorAll(".tab");
	const tabContents = document.querySelectorAll(".tab__content");
	// Для каждой вкладки устанавливаем ОС 
	tabs.forEach((tab, index) => {
		tab.addEventListener("click", function () {
			tabs.forEach(tab => tab.classList.remove("tab_active"));
			this.classList.add("tab_active");

			tabContents.forEach(content => content.style.display = "none");
			tabContents[index].style.display = "block";
		});
	});
});