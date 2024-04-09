// выбираем элемент
const cases = document.querySelectorAll(".rotator__case");
//отслеживаем текущий активный элемент
let currentIndex = 0;

// функция для смены активных элементов
function rotator() {
    // удаляем класс "rotator__case_active" у текущего элемента
    cases[currentIndex].classList.remove("rotator__case_active");
    // вычисляем индекс следующего элемента, который станет активным
    currentIndex = (currentIndex + 1) % cases.length;
    // добавляем класс "rotator__case_active" следующему элементу делая его активным
    cases[currentIndex].classList.add("rotator__case_active");
    
    const color = cases[currentIndex].dataset.color;
    cases[currentIndex].style.color = color;
    
    const speed = parseInt(cases[currentIndex].dataset.speed);
    setTimeout(rotator, speed)
};
 
rotator();