'use client';

import { useState } from 'react';
import {
	MdChevronLeft,
	MdMenuOpen,
	MdNotifications,
	MdOutlineChat,
	MdPublic,
} from 'react-icons/md';

import RightSidebar from './side-bar/RightSidebar';
import Link from 'next/link';

const Navbar = () => {
	const [openSidebar, setOpenSidebar] = useState(false);

	return (
		<>
			<section className='flex justify-end sm:justify-between items-center gap-4 p-5 rounded-xl bg-secondary'>
				<Link href='/dashboard' className='hidden sm:flex items-center'>
					<MdChevronLeft size={30} className='cursor-pointer' />
					<h1 className='text-xl mb-1 select-none'>Dashboard</h1>
				</Link>

				<div className='flex items-center gap-5'>
					<MdOutlineChat size={25} className='cursor-pointer' />
					<MdNotifications size={25} className='cursor-pointer' />
					<MdPublic size={25} className='cursor-pointer' />
					<MdMenuOpen size={25} onClick={() => setOpenSidebar(true)} className='lg:hidden' />
				</div>
			</section>

			<RightSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
		</>
	);
};

export default Navbar;
