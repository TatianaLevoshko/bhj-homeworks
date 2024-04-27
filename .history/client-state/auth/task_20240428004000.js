"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const signin = document.getElementById("signin");
	const form = document.getElementById("signin__form");
	const welcome = document.getElementById("welcome");
	const userIdInStorage = localStorage.getItem("user_id");

	// скрытия блока входа и отображения блока приветствия
	function hideSignin() {
		signin.classList.remove("signin_active");
		welcome.classList.add("welcome_active");
	}

	// Если в localStorage есть сохраненный userId
	if (userIdInStorage) {
		hideSignin();
		welcome.querySelector("#user_id").textContent = userIdInStorage;
	}

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(form);

		// Отправляем данные на сервер
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
		xhr.responseType = "json";
		xhr.send(formData);
		
		xhr.onload = function () {
			if (xhr.status === 200) {
				// Если ответ успешный
				if (xhr.response.success) {
					hideSignin();
					const userId = xhr.response.user_id;
					localStorage.setItem("user_id", userId);
					welcome.querySelector("#user_id").textContent = userId;
				} else {
					// Если авторизация не удалась
					alert("Неверный логин/пароль");
				}
			} else {
				// Если статус ответа не 200
				alert("Ошибка сервера. Попробуйте позже.");
			}
		};
		
		xhr.onerror = function () {
			alert("Запрос не удался");
		};
	});
});