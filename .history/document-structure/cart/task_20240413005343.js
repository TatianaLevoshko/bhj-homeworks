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
		product.querySelectorAll(".product__quantity-control").forEach(control => {control.addEventListener('click', () => changeQuantity(control, quantityValue));
		});
	});

	//
	function changeQuantity(control, quantityValue) {
		// получение текущего значения количества товара из текстового содержимого элемента и преобразование его в число
		let quantity = parseInt(quantityValue.textContent);
		// проверка, является ли элемент кнопкой уменьшения товара
		if (control.classList.contains("product__quantity-control_dec"))

	}









})