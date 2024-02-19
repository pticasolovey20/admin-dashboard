import { MdReadMore } from 'react-icons/md';

const Rightbar = () => {
	return (
		<div className='fixed mr-5'>
			<div className='flex flex-col gap-4 p-5 rounded-xl bg-gradient-to-b from-[#253352] to-[#182237]'>
				<span className='text-base font-bold'>🚀 Coming Soon</span>

				<h3 className='text-lg lg:text-xl font-medium'>Your title will be here</h3>

				<span className='text-base text-secondary'>Your subtitle will be here</span>

				<p className='text-base text-secondary'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industrys standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged.
				</p>

				<button
					type='button'
					className='w-fit flex items-center gap-2.5 py-2 px-3 rounded-md bg-[#5d57c9] cursor-pointer'
				>
					<MdReadMore size={25} />
					Learn
				</button>
			</div>
		</div>
	);
};

export default Rightbar;
