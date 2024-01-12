'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { classNames } from '@/app/utils';

const Pagination = ({ count }) => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const ITEM_PER_PAGE = 4;
	const page = searchParams.get('page') || 1;
	const params = new URLSearchParams(searchParams);

	const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
	const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

	const handleChangePage = (type) => {
		type === 'prev'
			? params.set('page', parseInt(page) - 1)
			: params.set('page', parseInt(page) + 1);

		replace(`${pathname}?${params}`);
	};

	return (
		<div className="flex justify-start gap-4">
			<button
				disabled={!hasPrev}
				onClick={() => handleChangePage('prev')}
				className={classNames(
					'text-black py-1 px-2 rounded-md',
					hasPrev ? 'bg-white' : 'bg-gray-400'
				)}
			>
				Prev
			</button>

			<button
				disabled={!hasNext}
				onClick={() => handleChangePage('next')}
				className={classNames(
					'text-black py-1 px-2 rounded-md',
					hasNext ? 'bg-white' : 'bg-gray-400'
				)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
