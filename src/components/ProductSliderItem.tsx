import React from 'react';
import pizzaImage from '../assets/pizza.png';

interface ProductSliderItemProps {
	imageURL: string;
	price: number;
	rate: number;
	title: string;
}

const ProductSliderItem: React.FC<ProductSliderItemProps> = ({
	imageURL = pizzaImage,
	price,
	rate,
	title,
}) => {
	return (
		<div className="bg-gray-100 rounded-lg overflow-hidden">
			<div className="h-full">
				<img src={imageURL} className="" />
			</div>
			<div className="px-4">
				<div className="font-bold text-lg">{title}</div>
			</div>
			<div className="px-4 py-2 flex">
				<div className="font-bold w-2/4 text-xl text-red-500">$ {price}</div>
				<div className="flex w-2/4 justify-end">
					<div className="text-yellow-500">&#9733;</div>
					<div className="font-bold text-gray-700">{rate}</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSliderItem;
