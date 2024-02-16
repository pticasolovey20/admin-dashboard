'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const handleSearch = useDebouncedCallback((event) => {
		const searchValue = event.target.value;
		const params = new URLSearchParams(searchParams);

		params.set('page', 1);

		if (searchValue) {
			searchValue.length >= 3 && params.set('q', searchValue);
		} else {
			params.delete('q');
		}

		replace(`${pathname}?${params}`);
	}, 300);

	return (
		<div className="flex items-center gap-3 p-2 rounded-lg bg-tertiary">
			<MdSearch size={20} className="cursor-pointer" />
			<input
				type="text"
				onChange={handleSearch}
				placeholder="Search for a user"
				className="text-secondary border-none outline-none bg-transparent"
			/>
		</div>
	);
};

export default SearchInput;
