import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
	return (
		<div className="flex items-center gap-3 p-2 rounded-lg bg-tertiary">
			<MdSearch size={20} className="cursor-pointer" />
			<input
				type="text"
				placeholder="Search for a user"
				className="text-secondary border-none outline-none bg-transparent"
			/>
		</div>
	);
};

export default SearchInput;
