const SubmitButton = ({ label }) => {
	return (
		<button type='submit' className='col-span-2 p-3 rounded-lg bg-[teal]'>
			<h1 className='text-lg text-center'>{label}</h1>
		</button>
	);
};

export default SubmitButton;
