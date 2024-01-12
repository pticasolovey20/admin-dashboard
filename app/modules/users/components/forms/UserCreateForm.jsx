'use client';

import { useState } from 'react';
import { classNames } from '@/app/utils';
import { addUser } from '../../lib/actions';
import { roleOptions, statusOptions } from '../../constants';

import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';

import { Controller, useForm } from 'react-hook-form';

const UserForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);

	const { register, control, handleSubmit } = useForm({ mode: 'onChange' });

	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const onSubmit = async (formData) => await addUser(formData);

	return (
		<form
			action={handleSubmit(onSubmit)}
			className={classNames(
				'grid grid-cols-1 sm:grid-cols-2 gap-5',
				'p-5 rounded-xl bg-secondary'
			)}
		>
			<Input
				name="username"
				id="username"
				required
				register={register}
				type="text"
				placeholder="Username"
			/>

			<Input
				name="email"
				id="email"
				required
				register={register}
				type="email"
				placeholder="Email"
			/>

			<Input
				name="password"
				id="password"
				required
				register={register}
				type="password"
				placeholder="Password"
			/>

			<Input name="phone" id="phone" register={register} type="phone" placeholder="Phone" />

			<Controller
				name="role"
				control={control}
				render={({ field }) => (
					<Select
						id="role"
						name="role"
						value={field.value}
						options={roleOptions}
						placeholder="Select value"
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => field.onChange(value)}
					/>
				)}
			/>

			<Controller
				name="status"
				control={control}
				render={({ field }) => (
					<Select
						id="status"
						name="status"
						value={field.value}
						options={statusOptions}
						placeholder="Select value"
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => field.onChange(value)}
					/>
				)}
			/>

			<TextArea
				name="address"
				id="address"
				register={register}
				placeholder="Address"
				rows={8}
			/>

			<SubmitButton label="Submit" />
		</form>
	);
};

export default UserForm;
