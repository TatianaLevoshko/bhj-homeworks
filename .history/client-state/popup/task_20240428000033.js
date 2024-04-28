"use strict";

document.addEventListener("DOMContentLoaded", () => {
	// есть ли в cookie информация о закрытии окна?
    const isModalClosed = document.cookie.includes("modalClosed=true");

    // если окно не было закрыто, показываем его
    if (!isModalClosed) {
        // всплывающее окно
        const modal = document.getElementById("subscribe-modal");

        // добавляя класс modal_active
        modal.classList.add("modal_active");

        // кнопка закрытия окна
        const closeButton = modal.querySelector(".modal__close");

        // обр.соб. для закрытия окна
        closeButton.addEventListener("click", () => {
            // скрываем окно, удаляя класс modal_active
            modal.classList.remove("modal_active");

            // устанавливаем информацию о закрытии окна в cookie
            document.cookie = "modalClosed=true";
        });
    }
});