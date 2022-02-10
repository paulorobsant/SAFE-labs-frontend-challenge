import products from '../assets/pizzas.json';

const fakeDelay = Math.floor(Math.random() * (800 - 50)) + 50;

const getWaitPromise = (time: number) =>
	new Promise((resolve) => setTimeout(resolve, time));

export const getProducts = () => {
	const fnPromise = Promise.resolve(() => products);
	const waitPromise = getWaitPromise(fakeDelay);

	return Promise.all([fnPromise, waitPromise]).then((values) => values[0]);
};
