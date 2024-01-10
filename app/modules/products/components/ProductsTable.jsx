import Image from 'next/image';
import Link from 'next/link';

import product from '@/public/noproduct.jpg';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';

const ProductsTable = () => {
	return (
		<table className="w-full">
			<thead className="border-b border-[#2e374a]">
				<tr>
					<td className="p-2.5">Title</td>
					<td className="p-2.5">Price</td>
					<td className="text-center p-2.5">Stock</td>
					<td className="hidden sm:table-cell text-center p-2.5">Created At</td>
					<td className="text-center p-2.5">Action</td>
				</tr>
			</thead>

			<tbody>
				{Array.from({ length: 4 }).map((_, index) => (
					<tr key={index} className="border-b border-[#2e374a]">
						<td className="py-2.5">
							<div className="flex items-center gap-2.5">
								<Image
									src={product}
									alt="product"
									priority
									className="hidden sm:block w-8 h-8 rounded-full object-cover"
								/>

								<span>IPhone</span>
							</div>
						</td>

						<td className="py-2.5">$1000</td>
						<td className="text-center py-2.5">84354</td>
						<td className="hidden sm:table-cell text-center py-2.5">25.12.2023</td>
						<td className="py-2.5">
							<div className="flex justify-center sm:gap-3">
								<Link href="/dashboard/products/id">
									<button className="py-0.5 px-2 rounded-md sm:bg-[teal]">
										<span className="hidden sm:block">View</span>
										<MdOutlineRemoveRedEye className="sm:hidden" size={20} />
									</button>
								</Link>

								<Link href="/">
									<button className="py-0.5 px-2 rounded-md sm:bg-[crimson]">
										<span className="hidden sm:block">Delete</span>
										<MdOutlineDelete className="sm:hidden" size={20} />
									</button>
								</Link>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ProductsTable;
