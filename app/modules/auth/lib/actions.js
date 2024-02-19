'use server';

import { signIn, signOut } from '@/app/auth';

export const authenticate = async (formData) => {
	const { email, password } = formData;

	try {
		await signIn('credentials', { email, password });
	} catch (error) {
		if (error.message.includes('CredentialsSignin')) {
			return { error: 'Invalid password or email!' };
		}

		throw error;
	}
};

export const handleLogout = async () => await signOut();
