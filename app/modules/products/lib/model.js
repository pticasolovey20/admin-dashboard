import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true, min: 3, max: 20 },
		description: { type: String, required: true },
		price: { type: Number, required: true, min: 0 },
		productImage: { type: String },
		color: { type: String },
		size: { type: String },
		stock: { type: Number, min: 0 },
		category: { type: String, min: 8, max: 20 },
	},

	{ timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
