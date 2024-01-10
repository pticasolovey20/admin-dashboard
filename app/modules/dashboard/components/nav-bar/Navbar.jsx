'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MdMenuOpen, MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

import RightSidebar from '../side-bar/RightSidebar';

const Navbar = () => {
	const [openSidebar, setOpenSidebar] = useState(false);

	const pathname = usePathname();

	return (
		<>
			<section className="flex justify-between items-center gap-4 p-5 rounded-xl bg-secondary">
				<h1 className="text-secondary font-bold text-lg sm:text-xl capitalize truncate">
					{pathname.split('/').pop().replace('-', ' ')}
				</h1>

				<div className="hidden sm:flex lg:hidden items-center gap-3 p-2.5 rounded-xl bg-tertiary">
					<MdSearch size={20} className="cursor-pointer" />
					<input
						type="text"
						placeholder="Search..."
						className="text-secondary border-none outline-none bg-transparent"
					/>
				</div>

				<div className="flex items-center gap-5">
					<div className="hidden lg:flex items-center gap-3 p-2.5 rounded-xl bg-tertiary">
						<MdSearch size={20} className="cursor-pointer" />
						<input
							type="text"
							placeholder="Search..."
							className="text-secondary border-none outline-none bg-transparent"
						/>
					</div>

					<MdOutlineChat size={25} className="cursor-pointer" />
					<MdNotifications size={25} className="cursor-pointer" />
					<MdPublic size={25} className="cursor-pointer" />

					<button onClick={() => setOpenSidebar(true)} className="lg:hidden">
						<MdMenuOpen size={25} />
					</button>
				</div>
			</section>

			<RightSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
		</>
	);
};

export default Navbar;
