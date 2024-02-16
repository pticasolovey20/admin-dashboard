const SubmitButton = ({ label }) => {
	return (
		<button type='submit' className='col-span-2 p-3 rounded-lg bg-[teal]'>
			{label}
		</button>
	);
};

export default SubmitButton;
