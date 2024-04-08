const cases = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

setInterval(() => {
	cases[currentIndex].classList.remove("rotator__case_active");
	currentIndex = (currentIndex + 1) % cases.length;
	cases[currentIndex].classList.add("rotator__case_active");

	
	cases.forEach((caseElement, index) => {
		if (index === currentIndex) {
			
		}
    });
}, 1000);

const speed = parseInt(cases[currentIndex].dataset.speed)
const color = cases[currentIndex].dataset.color;
caseElement.style.color = color;
caseElement.style.transitionDuration = speed + 'ms';