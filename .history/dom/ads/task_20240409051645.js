const cases = document.querySelectorAll(".rotator__case");
let currentIndex = 0;
const speeds = document.querySelectorAll("span[data-speed]");



setInterval(() => {
    cases[currentIndex].classList.remove("rotator__case_active");
    currentIndex = (currentIndex + 1) % cases.length;
    cases[currentIndex].classList.add("rotator__case_active");
    
    const color = cases[currentIndex].dataset.color;
    cases[currentIndex].style.color = color;

}, s);
