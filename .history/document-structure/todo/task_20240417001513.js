"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const tasksList = document.getElementById('tasks__list');

    // функция для добавления новой задачи
    function addTask(taskTitle) {
        const taskTemplate = `
            <div class="task">
                <div class="task__title">${taskTitle}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        const taskElement = document.createElement('div');
        taskElement.innerHTML = taskTemplate.trim(); // вставляем шаблон задачи в созданный элемент
        tasksList.appendChild(taskElement.firstChild); // добавляем задачу в список
    }

    // функция для удаления задачи
    function removeTask(taskElement) {
        taskElement.remove(); // удаляем элемент задачи из DOM
    }

    // обработчик события для кнопки "Добавить"
    document.getElementById('tasks__add').addEventListener('click', (event) => {
        event.preventDefault(); // предотвращаем стандартное действие кнопки
        const taskInput = document.getElementById('task__input'); // получаем поле ввода
        const taskTitle = taskInput.value.trim(); // получаем текст задачи и убираем лишние пробелы

        if (taskTitle !== '') { // проверяем, что задача не пустая
            addTask(taskTitle); // добавляем задачу в список
            taskInput.value = ''; // очищаем поле ввода
        }
    });

    // обработчик события для кнопки "Удалить"
    tasksList.addEventListener('click', (event) => {
        if (event.target.classList.contains('task__remove')) { // проверяем, что кликнули по кнопке "Удалить"
            const taskElement = event.target.closest('.task'); // находим ближайший родительский элемент задачи
            if (taskElement) {
                removeTask(taskElement); // удаляем задачу
            }
        }
    });

    // обработчик события для клавиши "Enter" в поле ввода
    document.getElementById('task__input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // проверяем, что нажата клавиша "Enter"
            event.preventDefault(); // предотвращаем стандартное действие клавиши
            const taskTitle = event.target.value.trim(); // получаем текст задачи и убираем лишние пробелы

            if (taskTitle !== '') { // проверяем, что задача не пустая
                addTask(taskTitle); // добавляем задачу в список
                event.target.value = ''; // очищаем поле ввода
            }
        }
    });
});