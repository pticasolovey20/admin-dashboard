'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight, MdLogout } from 'react-icons/md';

import { leftSideAnimation, menuItemAnimation } from '../../animation';
import { handleLogout } from '@/app/modules/auth/lib/actions';
import { menuItems } from '../../constants';
import { cn } from '@/app/utils';

import Image from 'next/image';

import MenuLink from './MenuLink';
import avatar from '@/public/noavatar.png';

const LeftSidebar = ({ user }) => {
	const [open, setOpen] = useState(false);

	return (
		<section className='h-screen hidden lg:block sticky top-0'>
			<AnimatePresence>
				<motion.nav
					initial='hidden'
					animate={open ? 'show' : 'hidden'}
					exit='hidden'
					variants={leftSideAnimation}
					className='h-full flex flex-col p-5 bg-secondary'
				>
					<div className='relative w-full flex items-center gap-5 my-5'>
						<div className='relative w-[50px] h-[50px] aspect-square'>
							<Image
								fill
								priority
								src={user.userImage || avatar}
								alt='avatar'
								className='rounded-full object-cover'
								sizes='(height:50px), (width:50px)'
							/>
						</div>

						{open && (
							<motion.div
								initial='hidden'
								animate='show'
								exit='hidden'
								variants={menuItemAnimation}
								className='flex flex-col'
							>
								<span className='font-medium whitespace-nowrap'>{user.username}</span>
								<span className='text-xs text-secondary'>Administrator</span>
							</motion.div>
						)}

						<button
							onClick={() => setOpen(!open)}
							className='absolute -top-4 -right-8 p-1 rounded-full bg-action'
						>
							{open ? <MdChevronLeft size={20} /> : <MdChevronRight size={20} />}
						</button>
					</div>

					<ul className='flex flex-col'>
						{menuItems.map(({ title, list }) => (
							<li key={title}>
								<div className='flex flex-col gap-2 py-2'>
									{list.map((link) => (
										<MenuLink key={link.title} {...link} open={open} />
									))}
								</div>

								<motion.span className='flex w-full h-px bg-tertiary' />
							</li>
						))}
					</ul>

					<form action={handleLogout}>
						<button
							className={cn(
								'w-full flex items-center gap-3',
								'p-3 mt-2 rounded-xl duration-300',
								'text-gray-400 hover:text-white'
							)}
						>
							<div>
								<MdLogout size={30} />
							</div>

							{open && (
								<motion.span
									initial='hidden'
									animate='show'
									exit='hidden'
									variants={menuItemAnimation}
									className='font-medium text-action'
								>
									Logout
								</motion.span>
							)}
						</button>
					</form>
				</motion.nav>
			</AnimatePresence>
		</section>
	);
};

export default LeftSidebar;
