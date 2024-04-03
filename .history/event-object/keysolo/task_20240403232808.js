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
}

// Устанавливаем интервал для вызова функции обратного отсчета
let time = setInterval(countdown, 1000);
class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.startTimer();
  }

  startTimer() {
    let timeLeft = this.currentSymbol.textContent.length;
    this.timerElement.textContent = this.formatTime(timeLeft);

    this.timerInterval = setInterval(() => {
      timeLeft--;
      this.timerElement.textContent = this.formatTime(timeLeft);

      if (timeLeft === 0) {
        clearInterval(this.timerInterval);
        this.fail();
      }
    }, 1000);
  }

  formatTime(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  registerEvents() {
    document.addEventListener("keydown", event => {
      const pressedKey = event.key.toUpperCase();
      const currentSymbol = this.currentSymbol.textContent.toUpperCase();

      if(pressedKey === currentSymbol) {
        this.success(); 
      } else {
        this.fail();   
      }
    })
  }

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

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

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

new Game(document.getElementById('game'));

