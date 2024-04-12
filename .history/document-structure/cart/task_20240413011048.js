"use strict";
document.addEventListener("DOMContentLoaded", () => {
	// получаем все элементы с классом .product
	const products = document.querySelectorAll(".product");

	// получаем элемент корзина
	const cartProducts = document.querySelector(".cart__products");

	// обработчик событий на кнопки увеличить/уменьшить количество товара и кнопку добавить в корзину
	// для каждого товара из списка
	products.forEach(product => {
		// получаем элементы кнопок управления количеством товара и кнопку добавления/удаления из корзины
		const quantityValue = product.querySelector(".product__quantity-value")
		const addButton = product.querySelector(".product__add");
		const removeButton = product.querySelector(".product__remuve");
		const productId = product.dataset.id // уникальный идентификатор товара (data-id)
		// назначаем обработчик события клика на кнопку добавления товара в корзину
		addButton.addEventListener("click", () => addToCart(productId, quantityValue.textContent));
		// назначаем обработчик события клика на кнопку удаления товара из корзины
		removeButton.addEventListener("click", () => removeFromCart(productId));

		// назначаем обработчики событий на кнопки увеличения/уменьшения количества товара
		product.querySelectorAll(".product__quantity-control").forEach(control => {
			control.addEventListener('click', () => changeQuantity(control, quantityValue));
		});
	});

	//
	function changeQuantity(control, quantityValue) {
		// получение текущего значения количества товара из текстового содержимого элемента и преобразование его в число
		let quantity = parseInt(quantityValue.textContent);
		// проверка, является ли элемент кнопкой уменьшения товара
		if (control.classList.contains("product__quantity-control_dec")) {
			// если текущее колличество товара больше 1, уменьшаем его на 1
			if (quantity > 1) {
				quantity--;
			}
			// проверка, является ли элемент кнопкой увеличения товара		
		} else if (control.classList.contains('product__quantity-control_inc')) {
			// eвеличиваем текущее количество товара на 1
			quantity++;
		}
		// обновление отображаемого значения количества товара.
		quantityValue.textContent = quantity;
	}

	// функция для добавления товара в корзину
	function addToCart(productId, quantity) {
		// поиск существующего товара в корзине по его идентификатору
		const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

		// если товар уже есть в корзине
		if (existingProduct) {
			// находим элемент, отображающий количество товара в корзине
			const countElement = existingProduct.querySelector('.cart__product-count');
			// увеличиваем количество товара на количество добавляемого товара
			countElement.textContent = parseInt(countElement.textContent) + parseInt(quantity);
		} else {
			// если товара нет в корзине, создаем новый элемент для него
			const product = document.querySelector(`.product[data-id="${productId}"]`);
			// получаем изображение товара
			const image = product.querySelector('.product__image').src;
			// создаем новый элемент товара в корзине
			const newProduct = document.createElement('div');
			// добавляем класс для стилизации
			newProduct.classList.add('cart__product');
			// устанавливаем атрибут data-id, чтобы идентифицировать товар
			newProduct.dataset.id = productId;
			// заполняем HTML нового элемента с изображением и количеством товара
			newProduct.innerHTML = `
					<img class="cart__product-image" src="${image}">
					<div class="cart__product-count">${quantity}</div>
				`;
			// добавляем новый элемент в корзину
			cartProducts.appendChild(newProduct);
		}
	}

	// 

		




	




});