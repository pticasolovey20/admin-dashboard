import Link from 'next/link';

import SearchInput from '@/app/modules/products/components/SearchInput';
import ProductsTable from '@/app/modules/products/components/ProductsTable';
import Pagination from '@/app/modules/products/components/Pagination';

const ProductsPage = () => {
	return (
		<div className="flex-1">
			<div className="flex flex-col gap-5 p-5 rounded-xl bg-secondary">
				<div className="flex flex-wrap gap-4">
					<SearchInput />

					<Link href="/dashboard/products/add-product">
						<button className="text-primary py-2 px-3 rounded-lg bg-action">
							Add new
						</button>
					</Link>
				</div>

				<ProductsTable />
				<Pagination />
			</div>
		</div>
	);
};

export default ProductsPage;
