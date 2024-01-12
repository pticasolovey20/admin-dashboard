import { connectToDatabase } from '@/app/lib/utils';
import { Product } from './model';

export const fetchProducts = async (query, page) => {
	const regex = new RegExp(query, 'i');

	try {
		connectToDatabase();

		const ITEM_PER_PAGE = 4;

		const count = await Product.find({ title: { $regex: regex } }).count();
		const products = await Product.find({ title: { $regex: regex } })
			.limit(ITEM_PER_PAGE)
			.skip(ITEM_PER_PAGE * (page - 1));

		return { count, products };
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fecth products!');
	}
};
