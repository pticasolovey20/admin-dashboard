'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { authenticate } from '../lib/actions';

import toast from 'react-hot-toast';

import Input from './Input';
import SubmitButton from './SubmitButton';

const SignInForm = () => {
	const [isPending, startTransition] = useTransition();

	const {
		register,
		handleSubmit,
		formState: {
			errors: { email: emailError, password: passwordError },
		},
	} = useForm({ mode: 'onChange' });

	const onSubmit = (formData) => {
		startTransition(() => {
			authenticate(formData).then((data) => {
				data?.error && toast.error(data.error);
			});
		});
	};

	return (
		<form
			action={handleSubmit(onSubmit)}
			className='w-full xs:w-[400px] flex flex-col gap-5 p-4 rounded-lg bg-secondary'
		>
			<h2 className='text-2xl text-center font-semibold text-secondary mt-4 mb-2'>
				Authentication
			</h2>

			<Input
				label='Email'
				id='email'
				name='email'
				type='email'
				required={{ required: 'The field is required' }}
				register={register}
				error={emailError}
				placeholder='example@gmail.com'
			/>

			<Input
				label='Password'
				id='password'
				name='password'
				type='password'
				required={{ required: 'The field is required' }}
				register={register}
				error={passwordError}
				placeholder='********'
			/>

			<SubmitButton label={isPending ? 'Loading...' : 'Sign In'} />
		</form>
	);
};

export default SignInForm;
