'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/app/utils';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useTransition } from 'react';
import { TailSpin } from 'react-loader-spinner';

const Pagination = ({ count }) => {
	const [isPending, startTransition] = useTransition();

	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const ITEM_PER_PAGE = 4;
	const page = searchParams.get('page') || 1;
	const params = new URLSearchParams(searchParams);

	const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
	const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

	const handleChangePage = (type) =>
		startTransition(() => {
			type === 'prev'
				? params.set('page', parseInt(page) - 1)
				: params.set('page', parseInt(page) + 1);

			replace(`${pathname}?${params}`);
		});

	return (
		<div className='flex justify-start items-center gap-4'>
			<button
				disabled={!hasPrev}
				onClick={() => handleChangePage('prev')}
				className={cn('text-black py-1 px-2 rounded-md', hasPrev ? 'bg-white' : 'bg-gray-400')}
			>
				<MdChevronLeft size={20} />
			</button>

			{isPending && (
				<TailSpin
					height='20'
					width='20'
					color='#ffffff'
					visible={true}
					ariaLabel='tail-spin-loading'
				/>
			)}

			<button
				disabled={!hasNext}
				onClick={() => handleChangePage('next')}
				className={cn('text-black py-1 px-2 rounded-md', hasNext ? 'bg-white' : 'bg-gray-400')}
			>
				<MdChevronRight size={20} />
			</button>
		</div>
	);
};

export default Pagination;
