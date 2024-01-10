import { classNames } from '@/app/utils';

const Pagination = ({ disabled = true }) => {
	return (
		<div className="flex justify-start gap-4">
			<button
				disabled={disabled}
				className={classNames(
					'text-black py-1 px-2 rounded-md',
					disabled ? 'bg-gray-400' : 'bg-white'
				)}
			>
				Prev
			</button>

			<button
				disabled={disabled}
				className={classNames(
					'text-black py-1 px-2 rounded-md',
					disabled ? 'bg-gray-400' : 'bg-white'
				)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
