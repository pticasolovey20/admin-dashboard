import { cn } from '@/app/utils';

const TextArea = ({ name, id, required = false, register, placeholder, rows }) => {
	return (
		<textarea
			id={id}
			name={name}
			{...register(name, { required })}
			rows={rows}
			placeholder={placeholder}
			className={cn(
				'col-span-2 outline-none',
				'text-primary p-3 bg-primary',
				'rounded-lg border-2 border-[#2e374a] '
			)}
		/>
	);
};

export default TextArea;
