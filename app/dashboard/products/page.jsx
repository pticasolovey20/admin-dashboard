import { fetchProducts } from '@/app/modules/products/lib/utils';

import Link from 'next/link';

import SearchInput from '@/app/modules/products/components/SearchInput';
import ProductsTable from '@/app/modules/products/components/ProductsTable';
import Empty from '@/app/modules/products/components/Empty';
import Pagination from '@/app/modules/products/components/Pagination';

const ProductsPage = async ({ searchParams }) => {
	const query = searchParams?.q || '';
	const page = searchParams?.page || 1;
	const { count, products } = await fetchProducts(query, page);

	return (
		<div className="w-full flex-1 flex">
			<div className="w-full flex-1 flex flex-col gap-5">
				<div className="flex flex-wrap gap-4">
					<SearchInput />

					<Link href="/dashboard/products/add-product">
						<button className="text-primary py-2 px-3 rounded-lg bg-action">
							Add new
						</button>
					</Link>
				</div>

				{products.length > 0 ? (
					<div className="w-full p-5 rounded-xl bg-secondary">
						<ProductsTable products={products} />
					</div>
				) : (
					<Empty />
				)}

				{products.length > 0 && <Pagination count={count} />}
			</div>
		</div>
	);
};

export default ProductsPage;
