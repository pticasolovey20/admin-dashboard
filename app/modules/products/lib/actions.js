'use server';

import { connectToDatabase } from '@/app/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Product } from './model';

export const addProduct = async (formData) => {
	const { title, description, price, color, size, stock, category } = formData;

	try {
		connectToDatabase();

		const newProduct = new Product({
			title,
			description,
			price,
			color,
			size,
			stock,
			category,
		});

		await newProduct.save();
	} catch (error) {
		console.log(error);
		throw new Error('Failed to create product');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};

export const deleteProduct = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDatabase();

		await Product.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to delete product');
	}

	revalidatePath('/dashboard/products');
};

export const updateProduct = async (formData) => {
	const { id, title, description, price, color, size, stock, category } = formData;

	try {
		connectToDatabase();

		const updatedFields = {
			title,
			description,
			price,
			color,
			size,
			stock,
			category,
		};

		Object.keys(updatedFields).forEach(
			(key) => (updatedFields[key] === '' || undefined) && delete updatedFields[key]
		);

		await Product.findByIdAndUpdate(id, updatedFields);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to update product!');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};
