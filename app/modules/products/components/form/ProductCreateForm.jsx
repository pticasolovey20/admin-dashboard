'use client';

import { useState } from 'react';
import { classNames } from '@/app/utils';
import { categoryOptions } from '../../constants';

import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';

const ProductForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);

	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	return (
		<form
			className={classNames(
				'grid grid-cols-1 sm:grid-cols-2 gap-5',
				'p-5 rounded-xl bg-secondary'
			)}
		>
			<Input name="title" id="title" type="text" placeholder="Title" />

			<Select
				id="category"
				name="category"
				options={categoryOptions}
				activeSelect={activeSelect}
				handleToggle={handleToggle}
			/>

			<Input name="price" id="price" type="text" placeholder="Price" />
			<Input name="stock" id="stock" type="text" placeholder="Stock" />
			<Input name="color" id="color" type="text" placeholder="Color" />
			<Input name="size" id="size" type="text" placeholder="Size" />

			<TextArea name="description" id="description" placeholder="Description" rows={8} />

			<SubmitButton label="Submit" />
		</form>
	);
};

export default ProductForm;
