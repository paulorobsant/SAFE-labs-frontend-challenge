import React from 'react';
import Slider, { Settings } from 'react-slick';
import cx from 'classnames';

interface ProductsSliderProps extends Settings {
	onSelectItem: (item: any, idx: number) => void;
	products: Array<any>;
	renderItem: (item: any, idx?: number) => any;
	selectedIndex: number;
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({
	onSelectItem,
	selectedIndex,
	products,
	renderItem: ProductItem,
	...settings
}) => {
	return (
		<Slider {...settings}>
			{products.map((item: any, idx: any) => (
				<div className="pr-4" key={idx} onClick={() => onSelectItem(item, idx)}>
					<ProductItem {...item} />
				</div>
			))}
		</Slider>
	);
};

export default ProductsSlider;
