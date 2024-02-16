'use server';

import { connectToDatabase } from '@/app/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { User } from './model';
import bcrypt from 'bcrypt';

export const addUser = async (formData) => {
	const { username, password, email, address, phone, role, status } = formData;

	try {
		connectToDatabase();

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			password: hashedPassword,
			email,
			address,
			phone,
			role,
			status,
		});

		await newUser.save();
	} catch (error) {
		console.log(error);
		throw new Error('Failed to create user');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};

export const deleteUser = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDatabase();

		await User.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to delete user');
	}

	revalidatePath('/dashboard/users');
};

export const updateUser = async (formData) => {
	const { id, username, password, email, address, phone, role, status } = formData;

	try {
		connectToDatabase();

		const updatedFields = {
			username,
			password,
			email,
			address,
			phone,
			role,
			status,
		};

		Object.keys(updatedFields).forEach(
			(key) => (updatedFields[key] === '' || undefined) && delete updatedFields[key]
		);

		await User.findByIdAndUpdate(id, updatedFields);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to update user!');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};
