const fontControls = document.querySelectorAll(".book__control_font-size .font-size");
const textColorControls = document.querySelectorAll(".book__control_color .color");
const brColorControls = document.querySelectorAll(".book__control_background .color");
const bookContent = document.querySelector(".book__content");
// изменение размера шрифта
function chengeTextColor(color) {
	bookContent.classList.remove("book_fs-smal", "book_fs-big");
	bookContent.classList.add(`book_fs-${size}`);
}

// изменение цвета шрифта
function chengeTextColor(color) {
	bookContent.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");
	bookContent.classList.add(`book_color-${color}`);
}
// изменение цвета фона
function chengeBgColor(color) {
	bookContent.classList.remove("book_bg-black", "book_bg-gray", "book_bg-whitesmoke");
	bookContent.classList.add(`book_bg-${color}`);
}

// обработчик событий для изменения размера шрифта
fontControls.forEach(control => {
	control.addEventListener("click", function (event) {
		event.preventDefault();
		const size = this.getAttribute("data-size");
		chengeFontSize(size);
		// убираем класс font-size_active у всех элементов
		fontControls.forEach(control.classList.remove("font-size_active"));
		// добавляем font-size_active только текущему элементу
		
	});
});