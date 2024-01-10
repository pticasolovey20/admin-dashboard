'use client';

import { useState } from 'react';
import { menuItems } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight, MdLogout } from 'react-icons/md';
import { leftSideAnimation, menuItemAnimation } from '../../animation';

import Image from 'next/image';
import MenuLink from './MenuLink';
import avatar from '@/public/noavatar.png';

const LeftSidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<section className="hidden lg:block sticky top-0 h-screen">
			<AnimatePresence>
				<motion.nav
					initial="hidden"
					animate={open ? 'show' : 'hidden'}
					exit="hidden"
					variants={leftSideAnimation}
					className="h-full flex flex-col p-5 bg-secondary"
				>
					<div className="relative w-full flex items-center gap-5 my-5">
						<Image
							src={avatar}
							alt="avatar"
							priority
							className="h-[50px] w-[50px] rounded-full object-cover"
						/>

						{open && (
							<motion.div
								initial="hidden"
								animate="show"
								exit="hidden"
								variants={menuItemAnimation}
								className="flex flex-col"
							>
								<span className="font-medium whitespace-nowrap">Jhon Doe</span>
								<span className="text-xs text-secondary">Administrator</span>
							</motion.div>
						)}

						<button
							onClick={() => setOpen(!open)}
							className="absolute -top-4 -right-8 p-1 rounded-full bg-action"
						>
							{open ? <MdChevronLeft size={20} /> : <MdChevronRight size={20} />}
						</button>
					</div>

					<ul className="flex flex-col">
						{menuItems.map(({ title, list }) => (
							<li key={title}>
								<div className="flex flex-col gap-2 py-2">
									{list.map((link) => (
										<MenuLink key={link.title} {...link} open={open} />
									))}
								</div>

								<motion.span className="flex w-full h-px bg-tertiary" />
							</li>
						))}
					</ul>

					<button className="w-full flex items-center gap-3 p-3 mt-2 rounded-xl hover:bg-tertiary">
						<div>
							<MdLogout size={30} />
						</div>

						{open && (
							<motion.span
								initial="hidden"
								animate="show"
								exit="hidden"
								variants={menuItemAnimation}
								className="font-medium text-action"
							>
								Logout
							</motion.span>
						)}
					</button>
				</motion.nav>
			</AnimatePresence>
		</section>
	);
};

export default LeftSidebar;
