'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const itemsContainer = document.getElementById('items');
	const loader = document.getElementById('loader');
  
	function showLoader() {
	  loader.classList.add('loader_active');
	}
  
	function hideLoader() {
	  loader.classList.remove('loader_active');
	}
  
	function renderCurrency(currency) {
	  const item = document.createElement('div');
	  item.classList.add('item');
	  item.innerHTML = `
		<div class="item__code">${currency.CharCode}</div>
		<div class="item__value">${currency.Value}</div>
		<div class="item__currency">руб.</div>
	  `;
	  itemsContainer.appendChild(item);
	}
  
	function loadData() {
	  showLoader();
  
	  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
		.then(response => response.json())
		.then(data => {
		  const currencies = data.response.Valute;
		  for (const currencyCode in currencies) {
			const currency = currencies[currencyCode];
			renderCurrency(currency);
		  }
		  hideLoader();
		})
		.catch(error => {
		  console.error('Ошибка загрузки данных:', error);
		  hideLoader();
		});
	}
  
	loadData();
  });