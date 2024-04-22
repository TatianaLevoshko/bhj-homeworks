'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const progress = document.getElementById('progress');
  const fileInput = document.getElementById('file');
  const sendButton = document.getElementById('send');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);

    xhr.upload.onprogress = function(event) { 
      if (event.lengthComputable) { 
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete;
      }
    };

    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Файл успешно загружен');
      } else {
        console.error('Произошла ошибка при загрузке файла');
      }
    };

    xhr.onerror = function() { 
      console.error('Произошла ошибка при загрузке файла');
    };

    xhr.send(formData);
  });

  fileInput.addEventListener('change', function() {
    const fileName = fileInput.files[0].name;
    const description = document.querySelector('.input__wrapper-desc');
    description.textContent = fileName;
  });
});