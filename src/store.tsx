import React, { createContext, useReducer } from 'react';
import {
	addProductToCart,
	checkoutOrder,
	removeProductFromCart,
} from './utils/order';

const initialState = {
	lastPage: '',
	currentPage: 'startup',
	selectedPizza: {},
	cart: [],
	order: null,
};

const store = createContext(initialState);
const { Provider } = store;

interface StateProviderProps {
	children: any;
}

const StoreProvider: React.FC<StateProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer((state: any, action: any) => {
		switch (action.type) {
			case 'navigate':
				return {
					...state,
					lastPage: state.currentPage,
					currentPage: action.data,
				};
			case 'selectToDetail':
				return {
					...state,
					selectedPizza: action.data,
				};
			case 'cleanSelectedToDetail':
				return {
					...state,
					selectedPizza: {},
				};
			case 'addToCart': {
				const cart = addProductToCart(state.cart, action.data);

				return {
					...state,
					cart,
					order: {
						total: checkoutOrder(cart),
					},
				};
			}
			case 'removeFromCart': {
				const cart = removeProductFromCart(state.cart, action.data);

				return {
					...state,
					cart,
					order: {
						total: checkoutOrder(cart),
					},
				};
			}
			case 'cleanCart': {
				return {
					...state,
					cart: [],
					order: {},
				};
			}
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ ...state, dispatch }}>
			{children({ state: state, dispatch })}
		</Provider>
	);
};

export { store, StoreProvider };
