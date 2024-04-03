"use strict"; // Эта строка включает строгий режим, что помогает избегать ошибок и делает код более безопасным.

let timerId = +(document.getElementById("timer").textContent); // Получаем значение таймера из HTML-элемента и преобразуем его в число.

let time = setInterval(countdown, 1000); // Устанавливаем интервал для вызова функции countdown каждую секунду.

function formatTime(seconds) { // Объявляем функцию formatTime для форматирования времени.
  const minutes = Math.floor(seconds / 60); // Вычисляем количество минут.
  const remainingSeconds = seconds % 60; // Вычисляем количество оставшихся секунд.

  const formattedMinutes = String(minutes).padStart(2, '0'); // Форматируем количество минут, чтобы оно всегда содержало две цифры.
  const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // Форматируем количество секунд, чтобы оно всегда содержало две цифры.
 
  return `${formattedMinutes}:${formattedSeconds}`; // Возвращаем отформатированную строку времени в формате "мм:сс".
}

function countdown() { // Объявляем функцию countdown для обратного отсчета.
  if (timerId > 0) { // Проверяем, если значение таймера больше 0.
    timerId--; // Уменьшаем значение таймера на 1.
    document.getElementById("timer").textContent = formatTime(timerId); // Обновляем отображение времени в HTML-элементе.
  } else { // Иначе, если время истекло.
    clearInterval(time); // Останавливаем интервал.
    alert("Время вышло, вы проиграли!"); // Выводим сообщение о проигрыше.
  }
}

class Game { // Объявляем класс Game для управления игрой.
  constructor(container) { // Конструктор класса принимает контейнер, в котором будет проходить игра.
    this.container = container; // Присваиваем контейнер к свойству объекта.
    this.wordElement = container.querySelector('.word'); // Получаем элемент, содержащий слово.
    this.winsElement = container.querySelector('.status__wins'); // Получаем элемент для отображения количества правильно введенных слов.
    this.lossElement = container.querySelector('.status__loss'); // Получаем элемент для отображения количества неправильно введенных слов.

    this.reset(); // Вызываем метод reset() для начала новой игры.

    this.registerEvents(); // Вызываем метод registerEvents() для регистрации событий клавиатуры.
  }

  reset() { // Метод reset() для начала новой игры.
    this.setNewWord(); // Вызываем метод setNewWord() для установки нового слова.
    this.winsElement.textContent = 0; // Устанавливаем начальное количество правильно введенных слов.
    this.lossElement.textContent = 0; // Устанавливаем начальное количество неправильно введенных слов.
  }

  registerEvents() { // Метод registerEvents() для регистрации событий клавиатуры.
    document.addEventListener("keydown", event => { // Добавляем обработчик события нажатия клавиши.
      const pressedKey = event.key.toUpperCase(); // Получаем нажатую клавишу и приводим ее к верхнему регистру.
      const currentSymbol = this.currentSymbol.textContent.toUpperCase(); // Получаем текущий символ слова и приводим его к верхнему регистру.

      if(pressedKey === currentSymbol) { // Если нажатая клавиша совпадает с текущим символом слова.
        this.success(); // Вызываем метод success().
      } else { // Иначе.
        this.fail(); // Вызываем метод fail().
      }
    });
  }

  success() { // Метод success() для обработки правильного ввода символа.
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current"); // Если текущий символ является текущим, удаляем у него класс "symbol_current".
    this.currentSymbol.classList.add('symbol_correct'); // Добавляем текущему символу класс "symbol_correct".
    this.currentSymbol = this.currentSymbol.nextElementSibling; // Переходим к следующему символу.

    if (this.currentSymbol !== null) { // Если еще не конец слова.
      this.currentSymbol.classList.add('symbol_current'); // Добавляем следующему символу класс "symbol_current".
      return; // Завершаем выполнение метода.
    }

    if (++this.winsElement.textContent === 10) { // Если количество правильно введенных слов достигло 10.
      alert('Победа!'); // Выводим сообщение о победе.
      this.reset(); // Начинаем новую игру.
    }
    this.setNewWord(); // Устанавливаем новое слово.
  }

  fail() { // Метод fail() для обработки неправильного ввода символа.
    if (++this.lossElement.textContent === 5) { // Если количество неправильно введенных символов достигло 5.
      alert('Вы проиграли!'); // Выводим сообщение о проигрыше.
      this.reset(); // Начинаем новую игру.
    }
    this.setNewWord(); // Устанавливаем новое слово.
  }

  setNewWord() { // Метод setNewWord() для установки нового слова.
    const word = this.getWord(); // Получаем новое слово.

    this.renderWord(word); // Отображаем слово на странице.
  }

  getWord() { // Метод getWord() для получения случайного слова из массива.
    const words = [ // Создаем массив слов.
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
