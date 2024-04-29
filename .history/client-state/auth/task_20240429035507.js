"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const signin = document.getElementById("signin");
	const form = document.getElementById("signin__form");
	const welcome = document.getElementById("welcome");
	const userIdInStorage = localStorage.getItem("user_id");

	// скрытие блока входа и отображение блока приветствия
	function hideSignin() {
		signin.classList.remove("signin_active");
		welcome.classList.add("welcome_active");
	}

	// если в localStorage есть сохраненный userId
	if (userIdInStorage) {
		hideSignin();
		welcome.querySelector("#user_id").textContent = userIdInStorage;
	}
	
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(form);

		// отправляем данные на сервер
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
		xhr.responseType = "json";
		xhr.send(formData);
		
		
		};
		
		xhr.onerror = function () {
			alert("Запрос не удался");
		};
	});
});