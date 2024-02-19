'use client';

import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { MdSearch } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';

const SearchInput = () => {
	const [isPending, startTransition] = useTransition();

	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const handleSearch = useDebouncedCallback(
		(event) =>
			startTransition(() => {
				const searchValue = event.target.value;
				const params = new URLSearchParams(searchParams);

				params.set('page', 1);

				if (searchValue) {
					searchValue.length >= 3 && params.set('q', searchValue);
				} else {
					params.delete('q');
				}

				replace(`${pathname}?${params}`);
			}),
		300
	);

	return (
		<div className='flex items-center gap-3 p-2 rounded-lg bg-tertiary'>
			{isPending ? (
				<TailSpin
					height='20'
					width='20'
					color='#ffffff'
					visible={true}
					ariaLabel='tail-spin-loading'
				/>
			) : (
				<MdSearch size={20} className='cursor-pointer' />
			)}

			<input
				type='text'
				onChange={handleSearch}
				placeholder='Search for a user'
				className='text-secondary border-none outline-none bg-transparent'
			/>
		</div>
	);
};

export default SearchInput;
