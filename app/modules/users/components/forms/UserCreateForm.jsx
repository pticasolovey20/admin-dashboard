'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { addUser } from '@/app/modules/users/lib/actions';
import { roleOptions, statusOptions } from '@/app/modules/users/constants';
import { cn } from '@/app/utils';

import toast from 'react-hot-toast';

import Input from '@/app/modules/users/components/forms/Input';
import Select from '@/app/modules/users/components/forms/Select';
import TextArea from '@/app/modules/users/components/forms/TextArea';
import SubmitButton from '@/app/modules/users/components/forms/SubmitButton';

const UserForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);
	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		formState: {
			errors: { username: usernameError, email: emailError, password: passwordError },
		},
	} = useForm({ mode: 'onChange' });

	const onSubmit = (formData) => {
		startTransition(() => {
			addUser(formData).then((data) => {
				data?.error ? toast.error(data.error) : router.push('/dashboard/users');
			});
		});
	};

	return (
		<form
			action={handleSubmit(onSubmit)}
			className={cn('grid grid-cols-1 sm:grid-cols-2 gap-5', 'p-5 rounded-xl bg-secondary')}
		>
			<Input
				id='username'
				name='username'
				required={{ required: 'The field is required' }}
				error={usernameError}
				register={register}
				placeholder='Username'
			/>

			<Input
				id='email'
				name='email'
				type='email'
				required={{ required: 'Please enter a valid email' }}
				error={emailError}
				register={register}
				placeholder='Email'
			/>

			<Input
				id='password'
				name='password'
				type='password'
				required={{ required: 'Password must be at least 8 characters' }}
				error={passwordError}
				register={register}
				placeholder='Password'
			/>

			<Input name='phone' id='phone' register={register} type='phone' placeholder='Phone' />

			<Controller
				name='role'
				control={control}
				defaultValue={roleOptions[0].value}
				render={({ field: { value, onChange } }) => (
					<Select
						id='role'
						name='role'
						value={value}
						options={roleOptions}
						placeholder='Select value'
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => onChange(value)}
					/>
				)}
			/>

			<Controller
				name='status'
				control={control}
				defaultValue={statusOptions[1].value}
				render={({ field: { value, onChange } }) => (
					<Select
						id='status'
						name='status'
						value={value}
						options={statusOptions}
						placeholder='Select value'
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => onChange(value)}
					/>
				)}
			/>

			<TextArea name='address' id='address' register={register} placeholder='Address' rows={8} />

			<SubmitButton label={isPending ? 'Posting...' : 'Submit'} />
		</form>
	);
};

export default UserForm;
