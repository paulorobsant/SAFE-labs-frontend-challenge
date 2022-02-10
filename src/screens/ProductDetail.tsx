import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Icon } from '@blueprintjs/core';
import { store } from '../store';
import { find, get } from 'lodash';

const ProductDetail = () => {
	const { dispatch, selectedPizza, cart } = React.useContext(store) as any;

	const onBackPage = () => {
		dispatch({
			type: 'navigate',
			data: 'startup',
		});

		dispatch({
			type: 'cleanSelectedToDetail',
		});
	};

	const toCartPage = () => {
		dispatch({
			type: 'navigate',
			data: 'cart',
		});
	};

	const addToCart = (item: any) => {
		dispatch({
			type: 'addToCart',
			data: item,
		});
	};

	const removeFromCart = (item: any) => {
		dispatch({
			type: 'removeFromCart',
			data: item,
		});
	};

	return (
		<div className="relative h-full">
			<NavigationBar
				leftButton={() => (
					<button onClick={() => onBackPage()}>
						<Icon icon="chevron-left" />
					</button>
				)}
				rightButton={() => (
					<button onClick={() => toCartPage()}>
						<Icon icon="shopping-cart" />
					</button>
				)}
				title="SafeLabs Delivery"
			/>

			<div className="bg-gray-100 h-full">
				<div className="flex w-full justify-center">
					<img src={selectedPizza.imageURL} className="w-3/4" />
				</div>
				<div className="h-full w-full bg-white shadow-2xl rounded-t-3xl p-8 ">
					<div className="">
						<div className="font-bold text-2xl">{selectedPizza.name}</div>
					</div>

					<div className="py-2 flex">
						<div className="font-bold w-2/4 text-xl text-red-500">{`$${selectedPizza.price}`}</div>
						<div className="flex w-2/4 justify-end">
							<div className="text-yellow-500">&#9733;</div>
							<div className="font-bold text-gray-700">4</div>
						</div>
					</div>

					<div className="py-2 text-gray-500">
						{selectedPizza.ingredients.toString()}
					</div>
					<div className="bottom-4 absolute w-full pr-16 flex	justify-center">
						<div className="flex items-center">
							<button
								className="mr-3 bg-red-500 rounded-full px-4 py-2 text-white font-bold text-xl"
								onClick={() => removeFromCart(selectedPizza)}
							>
								-
							</button>

							<div>
								{get(
									find(cart, function (o) {
										return o.id == selectedPizza.id;
									}),
									'quantity',
									0
								)}
							</div>

							<button
								className="ml-3 bg-red-500 rounded-full px-4 py-2  text-white font-bold text-xl"
								onClick={() => addToCart(selectedPizza)}
							>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
