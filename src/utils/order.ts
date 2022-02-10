import { findIndex } from 'lodash';
import Pizza, { PizzaOrdered } from '../interfaces/pizza';

const addProductToCart = (cartItems: PizzaOrdered[] = [], product: Pizza) => {
	const productIndex = findIndex(cartItems, { id: product.id });

	if (productIndex === -1) {
		const newProduct: PizzaOrdered = {
			...product,
			quantity: 1,
			amount: product.price,
		};
		return [...cartItems, newProduct];
	}

	const newProduct = cartItems[productIndex];
	const newCartItems = cartItems;

	newProduct.quantity = newProduct.quantity + 1;
	newProduct.amount = newProduct.price * newProduct.quantity;
	newCartItems[productIndex] = newProduct;

	return newCartItems;
};

const removeProductFromCart = (
	cartItems: PizzaOrdered[] = [],
	product: Pizza
) => {
	const productIndex = findIndex(cartItems, { id: product.id });

	if (productIndex === -1) {
		return cartItems;
	}

	const newProduct = cartItems[productIndex];
	const newCartItems = cartItems;

	if (newProduct.quantity === 1) {
		newCartItems.splice(productIndex, 1);
	} else {
		newProduct.quantity = newProduct.quantity - 1;
		newProduct.amount = newProduct.price * newProduct.quantity;
		newCartItems[productIndex] = newProduct;
	}

	return newCartItems;
};

const checkoutOrder = (cartItems: PizzaOrdered[] = []) => {
	return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export { addProductToCart, removeProductFromCart, checkoutOrder };
