"use strict";
let time; // хранение дентификатора
let initialTimeInSeconds = 60; // начальное значение
// форматирирование времени
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60); // колличество минут
  const remainingSeconds = seconds % 60; // колличество оставшегося времени
// форматирование минут / секунд
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
 
  return `${formattedMinutes}:${formattedSeconds}`;
}
// обратный отсчет
function countdown() { 
  if (initialTimeInSeconds > 0) {// проверка на оставшееся время
    initialTimeInSeconds--; // уменьшение времени
    document.getElementById("timer").textContent = formatTime(initialTimeInSeconds);
  } else {
    clearInterval(time); // остановка интервала
    alert("Время вышло, вы проиграли!");
    game.reset(); // сброс игры
  }
}
// класс игры
class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset(); // метод для начала новой игры

    this.registerEvents(); // регистрация обработчика событий
  }
  // метод для сброса игры
  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    initialTimeInSeconds = 60; // восстанавливаем начальное значение времени
    document.getElementById("timer").textContent = formatTime(initialTimeInSeconds); // обновляем отображение времени
    clearInterval(time); // сбрасываем таймер
    time = setInterval(countdown, 1000);
  }

  // метод для регистрации обработчиков событий
  registerEvents() {
    document.addEventListener("keydown", event => {
      const pressedKey = event.key.toUpperCase();
      const currentSymbol = this.currentSymbol.textContent.toUpperCase();

      if(pressedKey === currentSymbol) {
        this.success(); // правильное нажатие
      } else {
        this.fail();  //  неправильное нажатие
      }
    });
  }
  // обработка успешного нажатия клавиши
  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }
  //обработка неудачного нажатия клавиши
  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }
  // установка нового слова
  setNewWord() {
    const word = this.getWord(); // получаем новое слово

    this.renderWord(word); // отображаем новое слово на экране
  }
  // получаем новое слово из массива
  getWord() {
    const words = [
        'bob',
        'ann',
        'no',
        'hello',
        'kitty',
        'rock',
        'you',
        'pop',
        'cin',
        'love',
        'java'
      ],
      index = Math.floor(Math.random() * words.length); // гегерируем случайный индекс

    return words[index];
  }
  // отображение слова на экране
  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game')); // новый объект игры
