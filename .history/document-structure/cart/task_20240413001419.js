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
	});






})