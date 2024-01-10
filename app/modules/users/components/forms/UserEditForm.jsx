'use client';

import { useState } from 'react';
import { roleOptions, statusOptions } from '../../constants';

import Input from './Input';
import Select from './Select';
import SubmitButton from './SubmitButton';

const UserEditForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);

	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	return (
		<form className="flex flex-col gap-2">
			<Input label="Username" name="username" id="username" placeholder="Username" />
			<Input label="Email" name="email" id="email" type="email" placeholder="Email" />
			<Input label="Password" name="password" id="password" type="password" />
			<Input label="Phone" name="phone" id="phone" type="phone" placeholder="Phone" />
			<Input label="Address" name="address" id="address" placeholder="Address" />

			<Select
				label="Role"
				name="admin"
				id="admin"
				options={roleOptions}
				activeSelect={activeSelect}
				handleToggle={handleToggle}
			/>
			<Select
				label="Status"
				name="active"
				id="active"
				options={statusOptions}
				activeSelect={activeSelect}
				handleToggle={handleToggle}
			/>

			<SubmitButton label="Update" styles="mt-2" />
		</form>
	);
};

export default UserEditForm;
