const revealElements = document.querySelectorAll(".reveal");
// проверка, находится ли элемент в области видимости
function inViewport(elem) {
	const rect = elem.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerHeight || document.documentElement.clientWidth)
	);
}
// обработка события прокрутки
function handleScroll() {
	revealElements.forEach(elem => {
		if (inViewport(elem)) {
			elem.classList.add("reveal_active");
		} else {
			elem.classList.remove("reveal_active");
		}
	});
}
// обработка события прокрутки
window.addEventListener("scroll", handleScroll);
//вызов обработки события прокрутки в начале для отображения видимых элементов
handleScroll();
