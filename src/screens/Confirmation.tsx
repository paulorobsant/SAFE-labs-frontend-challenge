import { Icon } from '@blueprintjs/core';
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import delivery from '../assets/delivery.png';
import { store } from '../store';

const Confirmation = () => {
	const { dispatch } = React.useContext(store) as any;

	const toHomepage = () => {
		dispatch({
			type: 'navigate',
			data: 'startup',
		});
	};

	return (
		<div className="relative h-full">
			<NavigationBar
				leftButton={() => (
					<button onClick={() => toHomepage()}>
						<Icon icon="home" />
					</button>
				)}
				title="SafeLabs Delivery"
			/>

			<div className="h-full px-8">
				<div className="flex w-full justify-center">
					<img src={delivery} className="w-3/4" />
				</div>
				<div className="flex w-full justify-center">
					<div className="font-bold text-lg text-center">
						Seu pedido foi recebido e será entregue em x minutos!
					</div>
				</div>
			</div>
		</div>
	);
};

export default Confirmation;
