'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { updateProduct } from '@/app/modules/products/lib/actions';
import { categoryOptions } from '@/app/modules/products/constants';

import Input from '@/app/modules/products/components/forms/Input';
import Select from '@/app/modules/products/components/forms/Select';
import SubmitButton from '@/app/modules/products/components/forms/SubmitButton';

const ProductEditForm = ({ product, id }) => {
	const [activeSelect, setActiveSelect] = useState(null);
	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const { register, control, handleSubmit } = useForm({
		mode: 'onChange',
		defaultValues: {
			id,
			title: product.title || '',
			category: product.category || '',
			price: product.price || '',
			stock: product.stock || '',
			color: product.color || '',
			size: product.size || '',
		},
	});

	const onSubmit = async (formData) => updateProduct(formData);

	return (
		<form action={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<input type='hidden' id='id' name='id' {...register('id')} />
			<Input label='Title' name='title' id='title' register={register} placeholder='Title' />

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

			<Input label='Price' name='price' id='price' register={register} placeholder='Price' />
			<Input label='Stock' name='stock' id='stock' register={register} placeholder='Stock' />
			<Input label='Color' name='color' id='color' register={register} placeholder='Color' />
			<Input label='Size' name='size' id='size' register={register} placeholder='Size' />

			<SubmitButton label='Update' styles='mt-2' />
		</form>
	);
};

export default ProductEditForm;
