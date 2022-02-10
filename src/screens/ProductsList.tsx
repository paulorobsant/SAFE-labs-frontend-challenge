/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Icon } from '@blueprintjs/core';
import { lowerCase } from 'lodash';
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ProductSliderItem from '../components/ProductSliderItem';
import ProductsSlider from '../components/ProductsSlider';
import TextField from '../components/TextField';
import Pizza from '../interfaces/pizza';
import { getProducts } from '../services/product';
import { store } from '../store';

const ProductsList: React.FC = () => {
	const { dispatch } = React.useContext(store) as any;
	const [products, setProducts] = React.useState<Pizza[]>([]);
	const [searchText, setSearchText] = React.useState<string>('');

	const onSelectProduct = (item: Pizza) => {
		dispatch({
			type: 'navigate',
			data: 'productDetail',
		});

		dispatch({
			type: 'selectToDetail',
			data: item,
		});
	};

	const toCartPage = () => {
		dispatch({
			type: 'navigate',
			data: 'cart',
		});
	};

	const settings = {
		arrows: false,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	const getAllProducts = async () => {
		const data = await getProducts();

		if (data) {
			setProducts(data as any);
		}
	};

	const filteredProducts =
		searchText.trim().length === 0
			? products
			: products.filter((item: Pizza) => {
					return lowerCase(item.name).includes(searchText);
			  });

	React.useEffect(() => {
		getAllProducts();
	}, []);

	return (
		<div className="relative h-full relative">
			<NavigationBar
				title="SafeLabs Delivery"
				rightButton={() => (
					<button onClick={() => toCartPage()}>
						<Icon icon="shopping-cart" />
					</button>
				)}
			/>
			<div className="p-4">
				<div className="text-3xl font-bold py-10">
					Encontre o melhor sabor para você!
				</div>
				<TextField
					placeholder="Digite aqui para pesquisar.."
					value={searchText}
					onChange={(value: string) => setSearchText(lowerCase(value))}
					fullWidth
				/>
				<div className="absolute bottom-2 w-full pr-4">
					<ProductsSlider
						onSelectItem={(item) => onSelectProduct(item)}
						renderItem={(item: Pizza) => (
							<ProductSliderItem
								imageURL={item.imageURL}
								price={item.price}
								rate={4}
								title={item.name}
							/>
						)}
						selectedIndex={0}
						products={filteredProducts}
						{...settings}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
