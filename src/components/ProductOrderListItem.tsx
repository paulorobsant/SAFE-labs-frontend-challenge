import React from 'react';
import { PizzaOrdered } from '../interfaces/pizza';

interface ProductOrderListItemProps {
	item: PizzaOrdered;
}

const ProductOrderListItem: React.FC<ProductOrderListItemProps> = ({
	item,
}) => {
	return (
		<div className="flex my-5 items-center w-full">
			<img src={item.imageURL} alt="" className="w-1/4" />
			<div className="px-4 w-2/4">
				<div className="font-bold">{item.name}</div>
				<div className="text-gray-500 text-xs">
					{item.ingredients.toString().replaceAll(',', ', ')}
				</div>
				<div className="font-bold text-lg text-red-500">${item.price}</div>
			</div>
			<div className="font-bold w-1/4  grid justify-items-end">
				x{item.quantity}
			</div>
		</div>
	);
};

export default ProductOrderListItem;
