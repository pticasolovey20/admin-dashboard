'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { categoryOptions } from '../../constants';
import { addProduct } from '../../lib/actions';
import { cn } from '@/app/utils';

import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';

const ProductForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);
	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const { register, control, handleSubmit } = useForm({ mode: 'onChange' });
	const onSubmit = async (formData) => await addProduct(formData);

	return (
		<form
			action={handleSubmit(onSubmit)}
			className={cn('grid grid-cols-1 sm:grid-cols-2 gap-5', 'p-5 rounded-xl bg-secondary')}
		>
			<Input id='title' name='title' required={true} register={register} placeholder='Title' />

			<Controller
				name='category'
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						id='category'
						name='category'
						value={value}
						options={categoryOptions}
						placeholder='Select value'
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => onChange(value)}
					/>
				)}
			/>

			<Input id='price' name='price' required={true} register={register} placeholder='Price' />
			<Input name='stock' id='stock' register={register} placeholder='Stock' />
			<Input name='color' id='color' register={register} placeholder='Color' />
			<Input name='size' id='size' register={register} placeholder='Size' />

			<TextArea
				id='description'
				name='description'
				required={true}
				register={register}
				placeholder='Description'
				rows={8}
			/>

			<SubmitButton label='Submit' />
		</form>
	);
};

export default ProductForm;
