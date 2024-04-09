const revealEltvts = document.querySelectorAll(".reveal");

function inViewport(elem) {
	const rect = elem.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || )
		rect.right <= ()
	)
}
