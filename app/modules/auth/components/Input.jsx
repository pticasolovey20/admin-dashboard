const Input = ({ label, name, id, type = 'text', register, error, required, placeholder }) => {
	return (
		<div className='col-span-2 sm:col-span-1 flex flex-col gap-1'>
			{label && (
				<label className='ml-1' htmlFor={id}>
					{label}
				</label>
			)}

			<input
				id={id}
				name={name}
				type={type}
				{...register(name, required)}
				placeholder={placeholder}
				className='text-primary p-3 rounded-lg border-2 border-[#2e374a] bg-primary outline-none'
			/>

			{error && <span className='text-[#e04949] font-semibold ml-1'>{error?.message}</span>}
		</div>
	);
};

export default Input;
