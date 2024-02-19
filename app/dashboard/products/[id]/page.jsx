import { fetchProduct } from '@/app/modules/products/lib/utils';

import Image from 'next/image';
import ProductEditForm from '@/app/modules/products/components/forms/ProductEditForm';

import noproduct from '@/public/noproduct.jpg';

const ProductDetailsPage = async ({ params }) => {
	const { id } = params;
	const product = await fetchProduct(id);

	const porductProps = {
		id,
		title: product.title,
		category: product.category,
		price: product.price,
		stock: product.stock,
		color: product.color,
		size: product.size,
	};

	return (
		<div className='flex-1 flex flex-col sm:flex-row gap-5'>
			<div className='flex-1 h-fit flex gap-5 flex-col xs:flex-row sm:flex-col'>
				<div className='relative w-full xs:w-[50%] sm:w-full rounded-lg aspect-square overflow-hidden'>
					<Image
						fill
						priority
						src={product?.productImage || noproduct}
						alt='product'
						className='w-full h-full object-cover'
						sizes='(width:100%), (height:100%)'
					/>
				</div>
			</div>

			<div className='flex-[3] h-fit p-5 rounded-xl bg-secondary'>
				<ProductEditForm product={porductProps} />
			</div>
		</div>
	);
};

export default ProductDetailsPage;
