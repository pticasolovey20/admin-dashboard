import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/app/utils';

import { menuItemAnimation } from '../../animation';

import Link from 'next/link';

const MenuLink = ({ title, path, icon, open, setOpenSidebar = () => {} }) => {
	const pathname = usePathname();

	return (
		<Link
			href={path}
			onClick={() => setOpenSidebar(false)}
			className={cn(
				'flex items-center gap-3 p-2.5 rounded-xl',
				pathname === path ? 'text-white' : 'text-gray-400',
				'duration-300 hover:text-white cursor-pointer'
			)}
		>
			<div>{icon}</div>

			{open && (
				<motion.span
					initial='hidden'
					animate='show'
					exit='hidden'
					variants={menuItemAnimation}
					className='text-lg'
				>
					{title}
				</motion.span>
			)}
		</Link>
	);
};

export default MenuLink;
