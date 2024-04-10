const fontControls = document.querySelectorAll(".book__control_font-size .font-size");
const textColorControls = document.querySelectorAll(".book__control_color .color");
const bgColorControls = document.querySelectorAll(".book__control_background .color");
const bookContent = document.querySelector(".book__content");

// изменение размера шрифта
function changeFontSize(size) {
	bookContent.classList.remove("book_fs-small", "book_fs-big");
	bookContent.classList.add(`book_fs-${size}`);
}

// изменение цвета шрифта
function changeTextColor(color) {
	bookContent.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");
	bookContent.classList.add(`book_color-${color}`);
}
// изменение цвета фона
function changeBgColor(color) {
	bookContent.classList.remove("book_bg-black", "book_bg-gray", "book_bg-whi");
	bookContent.classList.add(`book_bg-${color}`);
}

// обработчик событий для изменения размера шрифта
fontControls.forEach(control => {
	control.addEventListener("click", function (event) {
		event.preventDefault();
		const size = this.getAttribute("data-size");
		changeFontSize(size);
		// убираем класс font-size_active у всех элементов
		fontControls.forEach(control => control.classList.remove("font-size_active"));
		// добавляем font-size_active только текущему элементу
		this.classList.add("font-size_active");
	});
});

// обработчик событий для цвета текста
textColorControls.forEach(control => {
	control.addEventListener("click", function (event) {
		event.preventDefault();
		const color = this.getAttribute("data-text-color");
		changeTextColor(color);
		// убираем класс color_active у всех элементов
		textColorControls.forEach(control => control.classList.remove("color_active"));
		// добавляем color_active только текущему элементу
		this.classList.add("color_active");
	});
});

// обработчик событий для цвета фона
bgColorControls.forEach(control => {
	control.addEventListener("click", function (event) {
		event.preventDefault();
		const color = this.getAttribute("data-bg-color");
		changeBgColor(color);
		// убираем класс color_active у всех элементов
		textColorControls.forEach(control => control.classList.remove("color_active"));
		// добавляем color_active только текущему элементу
		this.classList.add("color_active");
	});
});