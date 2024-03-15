"use strict";
// Получаем ссылки (более гибкий)
//let cookie = document.querySelector('.clicker__cookie');
//let counter = document.querySelector('.clicker__counter');

// Или (более более быстрый)
const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

// Функция, которая будет вызываться при клике на печенье
function clickOnCookie() {
	// Увеличиваем счетчик кликов
	counter.textContent++;
  
	// Измение ширины
	if (cookie.width === 200) {
	  cookie.width = 230;
	} else {
	  cookie.width = 200;
	}
	
	setTimeout(function() {
		if (cookie.width === 200) {
			cookie.width = 230;
		} else {
			cookie.width = 200;
		}
	}, 100); // Задержка
  }

// Обработчик события на элемент, для вызова функции clickOnCookie
cookie.addEventListener('click', clickOnCookie);