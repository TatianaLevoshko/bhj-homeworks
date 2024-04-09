// выбираем элемент
const cases = document.querySelectorAll(".rotator__case");
//отслеживаем текущий активный элемент
let currentIndex = 0;

// функция для смены активных элементов
function rotator() {
    // удаляем класс "rotator__case_active" у текущего элемента
    cases[currentIndex].classList.remove("rotator__case_active");
    // вычисляем индекс следующего элемента, который станет активным, используя остаток от деления, чтобы зациклиться при достижении конца списка
    currentIndex = (currentIndex + 1) % cases.length;
    // добавляем класс "rotator__case_active" следующему элементу делая его активным
    cases[currentIndex].classList.add("rotator__case_active");
    // получаем значение цвета для текущего активного элемента из его атрибута data
    const color = cases[currentIndex].dataset.color;
    // устанавливаем цвет текста активного элемента
    cases[currentIndex].style.color = color;
    // получаем значение скорости смены элементов из атрибута data текущего элемента
    const speed = parseInt(cases[currentIndex].dataset.speed);
    // устанавливаем таймер, который запускает функцию rotator() повторно через заданное время скорости
    setTimeout(rotator, speed)
};
 // запуск функции один раз, для начала смены элементов
rotator();