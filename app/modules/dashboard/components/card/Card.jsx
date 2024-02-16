import { cn } from '@/app/utils';

import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
	return (
		<div
			className={cn(
				'flex flex-col xl:flex-row flex-1 gap-5',
				'min-w-[200px] p-5 rounded-xl cursor-pointer',
				'bg-secondary hover:bg-tertiary'
			)}
		>
			<div>
				<MdSupervisedUserCircle size={30} />
			</div>

			<div className='flex flex-col gap-2'>
				<span className=''>Total Users</span>
				<span className='text-2xl font-medium'>10.270</span>

				<span>
					<span className='text-lime-500 font-medium'>12%</span> more than previous week
				</span>
			</div>
		</div>
	);
};

export default Card;
