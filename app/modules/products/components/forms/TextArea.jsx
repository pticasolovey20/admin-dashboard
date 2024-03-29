import { cn } from '@/app/utils';

const TextArea = ({ name, id, required = false, error, register, placeholder, rows }) => {
	return (
		<>
			<textarea
				id={id}
				name={name}
				{...register(name, required)}
				placeholder={placeholder}
				rows={rows}
				className={cn(
					'col-span-2 text-primary',
					'p-3 bg-primary outline-none',
					'rounded-lg border-2 border-[#2e374a]'
				)}
			/>

			{error && <span className='text-[#e04949] font-semibold ml-1'>{error?.message}</span>}
		</>
	);
};

export default TextArea;
