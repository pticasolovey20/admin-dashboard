import { connectToDatabase } from '@/app/lib/utils';
import { User } from '@/app/modules/users/lib/model';
import bcrypt from 'bcrypt';

import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import CredentialsProvider from 'next-auth/providers/credentials';

const login = async (credentials) => {
	try {
		connectToDatabase();

		const user = await User.findOne({ email: credentials.email });
		if (!user && user.role !== 'Admin') throw new Error('Invalid password or email!');

		const isPasswordMatch = await bcrypt.compare(credentials.password, user.password);
		if (!isPasswordMatch) throw new Error('Invalid password or email!');

		return user;
	} catch (error) {
		console.log(error);
		throw new Error('Invalid password or email!');
	}
};

export const { signIn, signOut, auth } = NextAuth({
	...authConfig,

	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.username = user.username;
				token.userImage = user.userImage;
			}

			return token;
		},

		async session({ session, token }) {
			if (token) {
				session.user.username = token.username;
				session.user.userImage = token.userImage;
			}

			return session;
		},
	},
});
