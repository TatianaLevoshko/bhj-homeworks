const cases = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

setInterval(() => {
	cases[currentIndex].classList.remove(".rotator__case_active");
	currentIndex = (currentIndex + 1)

}, 1000);