'use client';

import { MdReadMore } from 'react-icons/md';

const Rightbar = () => {
	return (
		<div className="fixed mr-5">
			<div className="flex flex-col gap-4 p-5 rounded-xl bg-gradient-to-b from-[#253352] to-[#182237]">
				<span className="text-base font-bold">🚀 Coming Soon</span>

				<h3 className="text-lg lg:text-xl font-medium">
					New server actions are available, partial pre-rendering is coming up!
				</h3>

				<span className="text-base text-secondary">Boost your productivity</span>

				<p className="text-base text-secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius
					libero perspiciatis recusandae possimus.
				</p>

				<button
					className="w-fit flex items-center gap-2.5 py-2 px-3 rounded-md bg-[#5d57c9] cursor-pointer"
					onClick={() => {}}
				>
					<MdReadMore size={25} />
					Learn
				</button>
			</div>
		</div>
	);
};

export default Rightbar;
