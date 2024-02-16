import mongoose from 'mongoose';

export const connectToDatabase = async () => {
	const connection = {};

	try {
		if (connection.isConnected) return;

		const database = await mongoose.connect(process.env.MONGO_DB_URL);
		connection.isConnected = database.connections[0].readyState;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
