'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { addUser } from '@/app/modules/users/lib/actions';
import { roleOptions, statusOptions } from '@/app/modules/users/constants';

import { cn } from '@/app/utils';

import Input from '@/app/modules/users/components/forms/Input';
import Select from '@/app/modules/users/components/forms/Select';
import TextArea from '@/app/modules/users/components/forms/TextArea';
import SubmitButton from '@/app/modules/users/components/forms/SubmitButton';

const UserForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);
	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const { register, control, handleSubmit } = useForm({ mode: 'onChange' });
	const onSubmit = async (formData) => await addUser(formData);

	return (
		<form
			action={handleSubmit(onSubmit)}
			className={cn('grid grid-cols-1 sm:grid-cols-2 gap-5', 'p-5 rounded-xl bg-secondary')}
		>
			<Input
				id='username'
				name='username'
				required={true}
				register={register}
				placeholder='Username'
			/>

			<Input
				id='email'
				name='email'
				type='email'
				required={true}
				register={register}
				placeholder='Email'
			/>

			<Input
				id='password'
				name='password'
				type='password'
				required={true}
				register={register}
				placeholder='Password'
			/>

			<Input name='phone' id='phone' register={register} type='phone' placeholder='Phone' />

			<Controller
				name='role'
				control={control}
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

			<SubmitButton label='Submit' />
		</form>
	);
};

export default UserForm;
