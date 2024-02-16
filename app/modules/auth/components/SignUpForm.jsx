import { cn } from '@/app/utils';

import Link from 'next/link';

import Input from './Input';
import SubmitButton from './SubmitButton';

const SignUpForm = () => {
	return (
		<form
			className={cn(
				'flex flex-col gap-5 p-5 rounded-lg bg-secondary',
				'w-full xs:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] xxl:w-[25%]'
			)}
		>
			<h2 className='text-2xl text-center font-semibold text-secondary mt-2 mb-4'>
				Welcome There!
			</h2>

			<Input label='Email' id='email' name='email' type='email' placeholder='example@gmail.com' />

			<Input
				label='Password'
				id='password'
				name='password'
				type='password'
				placeholder='********'
			/>

			<SubmitButton label='Sign-Up' />

			<div className='-mt-2 flex items-center justify-center gap-2 font-semibold'>
				<span className='text-secondary'>Already have an Account?</span>

				<Link href='/sign-in' className='text-[teal] text-lg'>
					Sign-In
				</Link>
			</div>
		</form>
	);
};

export default SignUpForm;
