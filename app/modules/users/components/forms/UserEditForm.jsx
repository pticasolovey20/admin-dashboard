'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { updateUser } from '@/app/modules/users/lib/actions';
import { roleOptions, statusOptions } from '@/app/modules/users/constants';

import toast from 'react-hot-toast';

import Input from '@/app/modules/users/components/forms/Input';
import Select from '@/app/modules/users/components/forms/Select';
import SubmitButton from '@/app/modules/users/components/forms/SubmitButton';

const UserEditForm = ({ user }) => {
	const [activeSelect, setActiveSelect] = useState(null);
	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const { register, control, handleSubmit } = useForm({
		mode: 'onChange',
		defaultValues: {
			id: user.id,
			username: user.username || '',
			email: user.email || '',
			phone: user.phone || '',
			address: user.address || '',
			role: user.role || '',
			status: user.status || '',
		},
	});

	const onSubmit = (formData) => {
		startTransition(() => {
			updateUser(formData).then((data) => {
				data?.error ? toast.error(data.error) : router.push('/dashboard/users');
			});
		});
	};

	return (
		<form action={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<input id='id' name='id' type='hidden' {...register('id')} />

			<Input
				id='username'
				name='username'
				label='Username'
				register={register}
				placeholder='Username'
			/>

			<Input
				id='email'
				name='email'
				type='email'
				label='Email'
				register={register}
				placeholder='Email'
			/>

			<Input label='Password' name='password' id='password' register={register} type='password' />

			<Input
				id='phone'
				name='phone'
				type='phone'
				label='Phone'
				register={register}
				placeholder='Phone'
			/>

			<Input
				id='address'
				name='address'
				label='Address'
				register={register}
				placeholder='Address'
			/>

			<Controller
				name='role'
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						id='role'
						name='role'
						label='Role'
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
				render={({ field: { value, onChange } }) => (
					<Select
						id='status'
						name='status'
						label='Status'
						value={value}
						options={statusOptions}
						placeholder='Select value'
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => onChange(value)}
					/>
				)}
			/>

			<SubmitButton label={isPending ? 'Updating...' : 'Update'} styles='mt-2' />
		</form>
	);
};

export default UserEditForm;
