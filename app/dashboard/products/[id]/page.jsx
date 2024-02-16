import { fetchProduct } from '@/app/modules/products/lib/utils';
import { cn } from '@/app/utils';

import Image from 'next/image';
import ProductEditForm from '@/app/modules/products/components/forms/ProductEditForm';

import noproduct from '@/public/noproduct.jpg';

const ProductDetailsPage = async ({ params }) => {
	const { id } = params;
	const product = await fetchProduct(id);

	return (
		<div className='flex-1 flex flex-col sm:flex-row gap-5'>
			<div
				className={cn(
					'flex-1 h-fit flex gap-5',
					'flex-col xs:flex-row sm:flex-col',
					'p-5 rounded-xl bg-secondary'
				)}
			>
				<div className='relative w-full xs:w-[50%] sm:w-full rounded-lg aspect-square overflow-hidden'>
					<Image
						src={product?.productImage || noproduct}
						alt='product'
						priority
						className='w-full h-full object-cover'
					/>
				</div>

				<span className='font-bold text-secondary truncate'>Iphone</span>
			</div>

			<div className='flex-[3] h-fit p-5 rounded-xl bg-secondary'>
				<ProductEditForm product={product} id={id} />
			</div>
		</div>
	);
};

export default ProductDetailsPage;
