import products from '../assets/pizzas.json';

const getWaitPromise = (time: number) =>
	new Promise((resolve) => setTimeout(resolve, time));

export const getProducts = () => {
	const fnPromise = Promise.resolve(() => products);
	const waitPromise = getWaitPromise(0);

	return Promise.all([fnPromise, waitPromise]).then((values) => values[0]);
};
