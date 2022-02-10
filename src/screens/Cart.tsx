import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Icon } from '@blueprintjs/core';
import { store } from '../store';
import ProductListItem from '../components/ProductListItem';
import { get } from 'lodash';

const Cart = () => {
	const { dispatch, cart, lastPage, order } = React.useContext(store) as any;

	const onBackPage = () => {
		dispatch({
			type: 'navigate',
			data: lastPage,
		});
	};

	const cleanCart = () => {
		dispatch({
			type: 'cleanCart',
		});
	};

	const addTocart = (item: any) => {
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

	const checkoutOrder = () => {
		dispatch({
			type: 'navigate',
			data: 'checkout',
		});
	};

	console.log(order);

	return (
		<div className="h-full w-full relative">
			<NavigationBar
				leftButton={() => (
					<button onClick={() => onBackPage()}>
						<Icon icon="chevron-left" />
					</button>
				)}
				title="SafeLabs Delivery"
			/>

			<div className="bg-gray-100 h-full rounded-lg">
				<div className="overflow-y-auto h-2/3">
					{cart.map((item: any, idx: any) => (
						<ProductListItem
							key={idx}
							item={item}
							addToCart={() => addTocart(item)}
							removeFromCart={() => removeFromCart(item)}
						/>
					))}
				</div>

				<div className="bottom-4 absolute w-full flex justify-center pr-8">
					<div className="w-full">
						{cart.length > 0 && (
							<div className="w-full pl-8 mb-5 flex justify-center">
								<button
									className="text-red-500 font-bold"
									onClick={() => cleanCart()}
								>
									Limpar carrinho
								</button>
							</div>
						)}
						<button
							className="bg-red-500 rounded-md px-4 py-2 mx-4 text-white font-bold w-full"
							onClick={() => checkoutOrder()}
							disabled={cart.length < 1}
						>
							Fechar pedido ${get(order, 'total', '0')}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
