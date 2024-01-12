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
			isAdmin: role?.value,
			isActive: status?.value,
		});

		await newUser.save();
	} catch (error) {
		console.log(error);
		throw new Error('Failed to create user');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};
