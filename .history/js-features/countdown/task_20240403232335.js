"use strict";
// Получаем значение таймера из текстового содержимого элемента
let timerId = +(document.getElementById("timer").textContent);

// Форматирование времени в формате "чч:мм:сс"
function formatTime(seconds) {
  // Вычисляем количество часов, минут и оставшихся секунд
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  // Ведущие нули для однозначных чисел
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
  // Возвращаем строку времени
  return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
  // return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Функция обратного отсчета
function countdown() {
  if (timerId > 0) {
    // Уменьшаем значение таймера на одну секунду и обновляем отображение времени
    timerId--;
    document.getElementById("timer").textContent = formatTime(timerId);
  } else {
    // Если время истекло, останавливаем интервал и выводим сообщение
    clearInterval(time);
    alert("Вы победили в конкурсе!");
  }
}let time = setInterval(countdown, 1000);

// Устанавливаем интервал для вызова функции обратного отсчета
