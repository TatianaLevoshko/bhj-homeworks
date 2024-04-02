// Находим все элементы с классом 'dropdown'
const dropdowns = document.querySelectorAll(".dropdown");

//Обработка клика
function dropdownLink(event) {
	//Запрет перехода по ссылке
	event.preventDefault();

	//Находим 'dropdown__value'
	const dropdownValue = event.currentTarget.closest(".dropdown").querySelector(".dropdown__value");
	//Устанавливаем текст ссылки в качестве нового значения 'dropdown__value'
	dropdownValue.textContent = event.target.textContent.trim();
	// Находим список содержащий текущую ссылку и удаляем класс 'dropdown__list_active'чтобы закрыть список
	event.currentTarget.closest(".dropdown__list").classList.remove("dropdown__list_active");
}

// Обработка клика на каждом пункте списка
dropdowns.forEach((dropdown) => {
	const dropdownValue = dropdown.querySelector(".dropdown__value");
	const dropdownList = dropdown.querySelector(".dropdown__list");

	// Добавляем обработчик событий на 'dropdown__value'
	dropdownValue.addEventListener("click", () => {
		//Переключаем класс 'dropdown__list_active' у текущего списка
		dropdownList.classList.toggle('dropdown__list_active');
    });
	// Добавляем один обработчик события на весь список, используя делегирование событий
    dropdownList.addEventListener("click", (event) => {
        // Проверяем, был ли клик на ссылке
        if (event.target.classList.contains("dropdown__link")) {
            // Если да, вызываем функцию для обработки клика на ссылке
            dropdownLink(event);
        }
    });
});