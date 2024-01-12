import { connectToDatabase } from '@/app/lib/utils';
import { User } from './model';

export const fetchUsers = async (query, page) => {
	const regex = new RegExp(query, 'i');

	try {
		connectToDatabase();

		const ITEM_PER_PAGE = 4;

		const count = await User.find({ username: { $regex: regex } }).count();
		const users = await User.find({ username: { $regex: regex } })
			.limit(ITEM_PER_PAGE)
			.skip(ITEM_PER_PAGE * (page - 1));

		return { count, users };
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fecth users!');
	}
};
