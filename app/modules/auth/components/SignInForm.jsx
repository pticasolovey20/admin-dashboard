import { classNames } from '@/app/utils';

import Input from './Input';
import Link from 'next/link';
import SubmitButton from './SubmitButton';

const SignInForm = () => {
	return (
		<form
			className={classNames(
				'flex flex-col gap-5 p-5 rounded-lg bg-secondary',
				'w-full xs:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] xxl:w-[25%]'
			)}
		>
			<h2 className="text-2xl text-center font-semibold text-secondary mt-2 mb-4">
				Welcome Back!
			</h2>

			<Input
				label="Email"
				id="email"
				name="email"
				type="email"
				placeholder="example@gmail.com"
			/>

			<Input
				label="Password"
				id="password"
				name="password"
				type="password"
				placeholder="********"
			/>

			<SubmitButton label="Sign In" />

			<div className="-mt-2 flex items-center justify-center gap-2 font-semibold">
				<span className="text-secondary">Dont have an Account?</span>

				<Link href="/sign-up" className="text-[teal] text-lg">
					Sign-Up
				</Link>
			</div>
		</form>
	);
};

export default SignInForm;
