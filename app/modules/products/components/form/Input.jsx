import { classNames } from '@/app/utils';

const Input = ({ label, name, id, type = 'text', placeholder }) => {
	return (
		<div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
			{label && (
				<label className="ml-1" htmlFor={id}>
					{label}
				</label>
			)}

			<input
				name={name}
				id={id}
				type={type}
				placeholder={placeholder}
				className={classNames(
					'text-primary p-3 rounded-lg border-2',
					'border-[#2e374a] bg-primary outline-none'
				)}
			/>
		</div>
	);
};

export default Input;
