const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='flex items-center justify-between text-secondary'>
			<span className='font-bold'>@pticasolovey21</span>
			<span className='text-sm'>© All rights are reserved, {year}</span>
		</footer>
	);
};

export default Footer;
