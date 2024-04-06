"use strict";
let timerId = +(document.getElementById("timer").textContent);
let time = setInterval(countdown, 1000);

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
 
  return `${formattedMinutes}:${formattedSeconds}`;
}

function countdown() {
  if (timerId > 0) {
    timerId--;
    document.getElementById("timer").textContent = formatTime(timerId);
  } else {
    clearInterval(time);
    alert("Время вышло, вы проиграли!");
  }
}

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    clearInterval(time);
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    timerId = 10;
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
    });
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
