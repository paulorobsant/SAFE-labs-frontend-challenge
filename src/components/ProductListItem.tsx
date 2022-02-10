import React from 'react';
import { PizzaOrdered } from '../interfaces/pizza';

interface ProductListItemProps {
	addToCart: any;
	item: PizzaOrdered;
	removeFromCart: any;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
	item,
	addToCart,
	removeFromCart,
}) => {
	return (
		<div className="flex my-5 p-2 items-center w-full">
			<img src={item.imageURL} alt="" className="w-1/4" />
			<div className="px-4 w-2/4">
				<div className="font-bold">{item.name}</div>
				<div className="text-gray-500 text-xs">
					{item.ingredients.toString().replaceAll(',', ', ')}
				</div>
				<div className="font-bold text-lg text-red-500">${item.price}</div>
			</div>
			<div className="flex w-1/4">
				<button
					className="mr-3 bg-red-500 rounded px-2 text-white font-bold"
					onClick={removeFromCart}
				>
					-
				</button>

				<div>{item.quantity}</div>

				<button
					className="ml-3 bg-red-500 rounded px-2 text-white font-bold"
					onClick={addToCart}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default ProductListItem;
