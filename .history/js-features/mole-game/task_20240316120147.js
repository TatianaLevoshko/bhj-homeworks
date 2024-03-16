// Получаем ссылки
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
// Получаем счетчики
let deadMole = parseInt(dead.textContent);
let lostMole = parseInt(lost.textContent);

// Получаем элемент с дырой по индексу
function getHole(index) {
	return document.getElementById("hole" + index);
}
// Обработчик клика ко всем дыркам
for (let i = 1; i < 10; i++) {
	//Обработчик клика
	getHole(i).onclick = function () {
		if (this.className.includes("hole_has-mole")) {
			// Счетчик убитых кротов
			++deadMole;
			// Обновляем текстовое содержимое элемента
			dead.textContent = deadMole;
		} else {
			//Счетчик промахов
			++lostMole;
			// Обновляем текстовое содержимое элемента
			lost.textContent = lostMole;
		}
		function endGame(result) {
			if (result === "win") {
				alert("Победа!");
			} else if (result === "lose") {
				alert("Проигрыш!");
			}
			//Сброс игры
			dead.textContent = "0";
			lost.textContent = "0";
			deadMole = 0;
			lostMole = 0;
		}
		
	}
}










/*
// Проверка победы или поражения
		if (deadMole === 10) {
			alert("Победа!");
			//Сброс игры
			dead.textContent = "0";
			lost.textContent = "0";
			deadMole = 0;
			lostMole = 0;
		} else if (lostMole === 5) {
			alert("Проигрыш!");
			//Сброс игры
			dead.textContent = "0";
			lost.textContent = "0";
			deadMole = 0;
			lostMole = 0;		

		}
		*/



	
	

	  
		
		



		
	








