'use client';

import { useState } from 'react';
import { categoryOptions } from '../../constants';

import Input from './Input';
import Select from './Select';
import SubmitButton from './SubmitButton';

const ProductEditForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);

	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	return (
		<form className="flex flex-col gap-2">
			<Input label="Title" name="title" id="title" placeholder="Title" />

			<Select
				label="Category"
				name="category"
				id="category"
				options={categoryOptions}
				activeSelect={activeSelect}
				handleToggle={handleToggle}
			/>

			<Input label="Price" name="price" id="price" placeholder="Price" />
			<Input label="Stock" name="stock" id="stock" placeholder="Stock" />
			<Input label="Color" name="color" id="color" placeholder="Color" />
			<Input label="Size" name="size" id="size" placeholder="Size" />

			<SubmitButton label="Update" styles="mt-2" />
		</form>
	);
};

export default ProductEditForm;
