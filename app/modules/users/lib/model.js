import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true, min: 3, max: 20 },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, min: 8, max: 20 },
		phone: { type: String },
		address: { type: String, min: 8, max: 20 },
		userImage: { type: String },
		role: { type: String, required: true },
		status: { type: String, required: true },
	},

	{ timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
