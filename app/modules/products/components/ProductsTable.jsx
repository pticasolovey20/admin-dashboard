import Image from 'next/image';
import Link from 'next/link';

import product from '@/public/noproduct.jpg';

import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { deleteProduct } from '../lib/actions';
import { formatDate } from '@/app/lib/helpers';
import { cn, delay } from '@/app/utils';

const ProductsTable = async ({ products }) => {
	await delay(2000);

	return (
		<table className='w-full'>
			<thead className='border-b border-[#2e374a]'>
				<tr>
					<td className='py-2.5'>Title</td>
					<td className='hidden sm:table-cell py-2.5'>Price</td>
					<td className='text-center py-2.5'>Stock</td>
					<td className='hidden sm:table-cell text-center py-2.5'>Created At</td>
					<td className='text-center py-2.5'>Action</td>
				</tr>
			</thead>

			<tbody>
				{products.map(({ id, productImage, title, price, stock, createdAt }, index) => {
					const isLastRow = index !== products.length - 1;

					return (
						<tr key={id} className={cn(isLastRow && 'border-b border-[#2e374a]')}>
							<td className='py-2.5'>
								<div className='flex items-center gap-2.5'>
									<div className='relative hidden sm:block h-[30px] w-[30px] aspect-square'>
										<Image
											fill
											priority
											src={productImage || product}
											alt={title}
											className='rounded-full object-cover'
											sizes='(width:30px), (height:30px)'
										/>
									</div>

									<span>{title}</span>
								</div>
							</td>

							<td className='hidden sm:table-cell py-2.5'>${price}</td>
							<td className='text-center py-2.5'>{stock}</td>

							<td className='hidden sm:table-cell text-center py-2.5'>{formatDate(createdAt)}</td>

							<td className='py-2.5'>
								<div className='flex justify-center sm:gap-3'>
									<Link href={`/dashboard/products/${id}`}>
										<button className='py-0.5 px-2 rounded-md sm:bg-[teal]'>
											<span className='hidden sm:block'>View</span>
											<MdOutlineRemoveRedEye className='sm:hidden' size={20} />
										</button>
									</Link>

									<form action={deleteProduct}>
										<input name='id' value={id} type='hidden' />

										<button className='py-0.5 px-2 rounded-md sm:bg-[crimson]'>
											<span className='hidden sm:block'>Delete</span>
											<MdOutlineDelete className='sm:hidden' size={20} />
										</button>
									</form>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ProductsTable;
