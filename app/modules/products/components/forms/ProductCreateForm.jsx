'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { categoryOptions } from '../../constants';
import { addProduct } from '../../lib/actions';
import { cn } from '@/app/utils';

import toast from 'react-hot-toast';

import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';

const ProductForm = () => {
	const [activeSelect, setActiveSelect] = useState(null);
	const handleToggle = (id) => setActiveSelect(activeSelect === id ? null : id);

	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		formState: {
			errors: {
				title: titleError,
				category: categoryError,
				price: priceError,
				stock: stockError,
				color: colorError,
				description: descriptionError,
			},
		},
	} = useForm({ mode: 'onChange' });

	const onSubmit = (formData) => {
		startTransition(() => {
			addProduct(formData).then((data) => {
				data?.error ? toast.error(data.error) : router.push('/dashboard/products');
			});
		});
	};

	return (
		<form
			action={handleSubmit(onSubmit)}
			className={cn('grid grid-cols-1 sm:grid-cols-2 gap-5', 'p-5 rounded-xl bg-secondary')}
		>
			<Input
				id='title'
				name='title'
				required={{ required: 'The field is required' }}
				error={titleError}
				register={register}
				placeholder='Title'
			/>

			<Controller
				name='category'
				control={control}
				rules={{ required: 'Please select the category' }}
				render={({ field: { value, onChange } }) => (
					<Select
						id='category'
						name='category'
						value={value}
						error={categoryError}
						options={categoryOptions}
						placeholder='Select value'
						activeSelect={activeSelect}
						handleToggle={handleToggle}
						onChange={(value) => onChange(value)}
					/>
				)}
			/>

			<Input
				id='price'
				name='price'
				required={{ required: 'The field is required' }}
				error={priceError}
				register={register}
				placeholder='Price'
			/>

			<Input
				name='stock'
				id='stock'
				required={{ required: 'The field is required' }}
				error={stockError}
				register={register}
				placeholder='Stock'
			/>

			<Input
				name='color'
				id='color'
				required={{ required: 'The field is required' }}
				error={colorError}
				register={register}
				placeholder='Color'
			/>

			<Input name='size' id='size' register={register} placeholder='Size' />

			<TextArea
				id='description'
				name='description'
				register={register}
				required={{ required: 'The field is required' }}
				error={descriptionError}
				placeholder='Description'
				rows={8}
			/>

			<SubmitButton label={isPending ? 'Posting...' : 'Submit'} />
		</form>
	);
};

export default ProductForm;
