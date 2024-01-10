import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { classNames } from '@/app/utils';
import { menuItemAnimation } from '../../animation';

import Link from 'next/link';

const MenuLink = ({ title, path, icon, open, setOpenSidebar = () => {} }) => {
	const pathname = usePathname();

	return (
		<Link
			href={path}
			onClick={() => setOpenSidebar(false)}
			className={classNames(
				'flex items-center gap-3 p-2 sm:p-3 rounded-xl',
				'hover:bg-tertiary cursor-pointer',
				pathname === path && 'bg-tertiary'
			)}
		>
			<div>{icon}</div>

			{open && (
				<motion.span
					initial="hidden"
					animate="show"
					exit="hidden"
					variants={menuItemAnimation}
					className="text-lg"
				>
					{title}
				</motion.span>
			)}
		</Link>
	);
};

export default MenuLink;
