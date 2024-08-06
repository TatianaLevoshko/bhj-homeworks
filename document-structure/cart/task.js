"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");

    const cartProducts = document.querySelector(".cart__products");

    products.forEach(product => {
        const quantityValue = product.querySelector(".product__quantity-value");
        const addButton = product.querySelector(".product__add");
		
		const removeButton = product.querySelector(".product__remuve");
        const productId = product.dataset.id; 
      
        removeButton.addEventListener("click", () => removeFromCart(productId));
        addButton.addEventListener("click", () => addToCart(productId, quantityValue.textContent));

        product.querySelectorAll(".product__quantity-control").forEach(control => {
            control.addEventListener('click', () => changeQuantity(control, quantityValue));
        });
    });

    function changeQuantity(control, quantityValue) {
        let quantity = parseInt(quantityValue.textContent);
        if (control.classList.contains("product__quantity-control_dec")) {
            if (quantity > 1) {
                quantity--;
            }
        } else if (control.classList.contains('product__quantity-control_inc')) {
            quantity++;
        }
        quantityValue.textContent = quantity;
    }

    function addToCart(productId, quantity) {
        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        if (existingProduct) {
            const countElement = existingProduct.querySelector('.cart__product-count');
            countElement.textContent = parseInt(countElement.textContent) + parseInt(quantity);
        } else {
            const product = document.querySelector(`.product[data-id="${productId}"]`);
            const image = product.querySelector('.product__image').src;
            const newProduct = document.createElement('div');
            newProduct.classList.add('cart__product');
            newProduct.dataset.id = productId;
            newProduct.innerHTML = `
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-controls">
                    <button class="cart__product-control cart__product-control_dec">-</button>
                    <div class="cart__product-count">${quantity}</div>
                    <button class="cart__product-control cart__product-control_inc">+</button>
                </div>
            `;
            cartProducts.appendChild(newProduct);

            newProduct.querySelectorAll(".cart__product-control").forEach(control => {
                control.addEventListener('click', () => changeCartQuantity(control, productId));
            });
        }
    }

    function changeCartQuantity(control, productId) {
        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        if (existingProduct) {
            const countElement = existingProduct.querySelector('.cart__product-count');
            let quantity = parseInt(countElement.textContent);
            if (control.classList.contains("cart__product-control_dec")) {
                if (quantity > 1) {
                    quantity--;
                }
            } else if (control.classList.contains('cart__product-control_inc')) {
                quantity++;
            }
            countElement.textContent = quantity;
        }
    }

    function removeFromCart(productId) {
		const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
		if (existingProduct) {
			existingProduct.remove();
		}
	}
	
});
