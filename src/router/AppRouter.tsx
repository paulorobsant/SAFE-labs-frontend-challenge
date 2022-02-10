import React from 'react';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Confirmation from '../screens/Confirmation';
import ProductDetail from '../screens/ProductDetail';
import ProductsList from '../screens/ProductsList';
import { StoreProvider } from '../store';

const AppRouter = () => {
	return (
		<StoreProvider>
			{({ state }: any) => {
				switch (state.currentPage) {
					case 'startup':
						return <ProductsList />;
					case 'productDetail':
						return <ProductDetail />;
					case 'checkout':
						return <Checkout />;
					case 'confirmation':
						return <Confirmation />;
					case 'cart':
						return <Cart />;
					default:
						return null;
				}
			}}
		</StoreProvider>
	);
};

export default AppRouter;
