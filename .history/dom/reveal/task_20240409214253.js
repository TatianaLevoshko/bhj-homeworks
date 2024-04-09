const revealElements = document.querySelectorAll(".reveal");
// проверка, находится ли элемент в области видимости
function inViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
// обработка события прокрутки
function handleScroll() {
	revealElements.forEach(element => {
		if (inViewport(element)) {
			element.classList.add("reveal_active");
		} else {
			element.classList.remove("reveal_active");
		}
	});
}
// обработка события прокрутки
window.addEventListener("scroll", handleScroll);
//вызов обработки события прокрутки в начале для отображения видимых элементов
handleScroll();
