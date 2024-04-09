// выбираем элемент
const cases = document.querySelectorAll(".rotator__case");
//отслеживаем текущий активный элемент
let currentIndex = 0;

// функция для смены активных элементов
function rotator() {
    // 
    cases[currentIndex].classList.remove("rotator__case_active");
    currentIndex = (currentIndex + 1) % cases.length;
    cases[currentIndex].classList.add("rotator__case_active");
    
    const color = cases[currentIndex].dataset.color;
    cases[currentIndex].style.color = color;
    
    const speed = parseInt(cases[currentIndex].dataset.speed);
    setTimeout(rotator, speed)
};
 
rotator();