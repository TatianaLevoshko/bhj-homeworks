const revealEltvts = document.querySelectorAll(".reveal");
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


