"use strict";

document.addEventListener("DOMContentLoaded", () => {
    
	const editor = document.getElementById("editor");
	const resetButton = document.getElementById("resetButton");

    // есть ли сохраненный текст в localStorage
    const savedText = localStorage.getItem("editorText");
    // если есть, загружаем его в редактор
    if (savedText) {
        editor.value = savedText;
    }

    // обр.соб. изменения текста в редакторе
    editor.addEventListener("input", () => {
        // получаем текущий текст из редактора
        const currentText = editor.value;
        // сохраняем текст в localStorage
        localStorage.setItem("editorText", currentText);
	});
	// "Сбросить"
    resetButton.addEventListener("click", () => {
        // очищаем текстовый редактор
        editor.value = "";
        // удаляем сохраненный текст из localStorage
        localStorage.removeItem("editorText");
    });
});