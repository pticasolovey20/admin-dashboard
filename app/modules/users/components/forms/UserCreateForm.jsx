'use client';

import { useState } from 'react';
import { classNames } from '@/app/utils';
import { roleOptions, statusOptions } from '../../constants';

import Input from './Input';
import Select from './Select';
import SubmitButton from './SubmitButton';

const UserForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);

	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	return (
		<form
			className={classNames(
				'grid grid-cols-1 sm:grid-cols-2 gap-5',
				'p-5 rounded-xl bg-secondary'
			)}
		>
			<Input name="username" id="username" type="text" placeholder="Username" />
			<Input name="email" id="email" type="email" placeholder="Email" />
			<Input name="password" id="password" type="password" placeholder="Password" />
			<Input name="phone" id="phone" type="phone" placeholder="Phone" />

			<Select
				id="role"
				name="role"
				options={roleOptions}
				activeSelect={activeSelect}
				handleToggle={handleToggle}
			/>

			<Select
				id="status"
				name="status"
				options={statusOptions}
				activeSelect={activeSelect}
				handleToggle={handleToggle}
			/>

			<SubmitButton label="Submit" />
		</form>
	);
};

export default UserForm;
