import { AnimatePresence, motion } from 'framer-motion';
import { MdLogout, MdOutlineClose } from 'react-icons/md';
import { menuItemAnimation, rightSideAnimation } from '../../animation';
import { classNames } from '@/app/utils';
import { menuItems } from '../../constants';

import MenuLink from './MenuLink';

const RightSidebar = ({ openSidebar, setOpenSidebar }) => {
	return (
		<>
			<AnimatePresence>
				{openSidebar && (
					<motion.aside
						key="mobile-navigation"
						initial="closed"
						animate="open"
						exit="closed"
						variants={rightSideAnimation}
						className={classNames(
							'fixed top-0 right-0 h-screen w-full sm:w-[350px] z-20',
							'flex flex-col gap-4 p-6 bg-secondary shadow-md shadow-black'
						)}
					>
						<button onClick={() => setOpenSidebar(false)}>
							<MdOutlineClose size={30} />
						</button>

						<ul className="flex flex-col">
							{menuItems.map(({ title, list }) => (
								<li key={title}>
									<div className="flex flex-col gap-2 py-1 sm:py-2">
										{list.map((link) => (
											<MenuLink
												key={link.title}
												{...link}
												open={open}
												setOpenSidebar={setOpenSidebar}
											/>
										))}
									</div>

									<motion.span className="flex w-full h-px bg-tertiary" />
								</li>
							))}
						</ul>

						<button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-tertiary">
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
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
};

export default RightSidebar;
