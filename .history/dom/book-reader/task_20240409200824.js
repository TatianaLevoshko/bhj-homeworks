const fontControls = document.querySelectorAll(".book__control_font-size .font-size");
const textColorControls = document.querySelectorAll(".book__control_color .color");
const brColorControls = document.querySelectorAll(".book__control_background .color");
const bookContent = document.querySelector(".book__content");
// bpvtytybt изменение ра
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