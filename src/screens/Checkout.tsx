import { Icon } from '@blueprintjs/core';
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import delivery from '../assets/delivery.png';
import orderDetails from '../assets/order.json';
import { store } from '../store';
import ProductOrderListItem from '../components/ProductOrderListItem';

const Checkout = () => {
	const { dispatch, cart, order } = React.useContext(store) as any;

	const toHomepage = () => {
		dispatch({
			type: 'navigate',
			data: 'startup',
		});

		dispatch({
			type: 'cleanCart',
		});
	};

	const deliveryTime = new Date(orderDetails.deliveryTime).getMinutes();

	return (
		<div className="relative h-full">
			<NavigationBar title="SafeLabs Delivery" />

			<div className="h-full px-8">
				<div className="flex w-full justify-center">
					<img src={delivery} className="w-3/4" />
				</div>
				<div className="flex w-full justify-center">
					<div className="font-bold text-lg text-center">
						Seu pedido foi recebido e será entregue em {deliveryTime} minutos!
					</div>
				</div>

				<div className="overflow-y-auto h-1/4">
					{cart.map((item: any, idx: any) => (
						<ProductOrderListItem key={idx} item={item} />
					))}
				</div>

				<div className="bottom-4 absolute w-full flex justify-center pr-16">
					<div className="w-1/2">
						<div>Total do pedido: </div>
						<div className="font-bold text-red-500">${order.total}</div>
					</div>
					<div className="w-1/2">
						<button
							className="bg-red-500 rounded-md py-2 text-white font-bold w-full"
							onClick={() => toHomepage()}
						>
							Tela inicial
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
