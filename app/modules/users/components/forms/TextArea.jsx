import { classNames } from '@/app/utils';

const TextArea = ({ name, id, placeholder, rows }) => {
	return (
		<textarea
			name={name}
			id={id}
			placeholder={placeholder}
			rows={rows}
			className={classNames(
				'col-span-2 outline-none',
				'text-primary p-3 bg-primary',
				'rounded-lg border-2 border-[#2e374a] '
			)}
		/>
	);
};

export default TextArea;
