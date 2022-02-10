interface Pizza {
	id: string;
	imageURL: string;
	ingredients: string[];
	name: string;
	price: number;
}

export interface PizzaOrdered  extends Pizza {
	amount: number;
	quantity: number;
}

export default Pizza;
