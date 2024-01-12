import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '@/app/utils';

import { FiChevronDown } from 'react-icons/fi';

const Select = ({
	label,
	name,
	id,
	options,
	placeholder,
	activeSelect,
	handleToggle,
	value,
	onChange,
}) => {
	const selectRef = useRef(null);

	const isCurrentSelectOpen = activeSelect === id;

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (selectRef.current && !selectRef.current.contains(event.target)) {
				handleToggle(null);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const handleSelectValue = (value) => {
		onChange(value);
		handleToggle(null);
	};

	return (
		<div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
			{label && <label className="ml-1">{label}</label>}

			<div
				id={id}
				name={name}
				ref={selectRef}
				onClick={() => handleToggle(id)}
				className="relative flex flex-col cursor-pointer"
			>
				<div className="h-[52px] flex justify-between p-3 rounded-lg border-2 border-[#2e374a] bg-primary">
					<span className="capitalize">{value?.title || placeholder}</span>

					<motion.button
						type="button"
						key="trigger"
						initial={{ rotate: 0 }}
						animate={{ rotate: isCurrentSelectOpen ? -180 : 0 }}
						exit={{ rotate: 0 }}
						transition={{ duration: 0.3 }}
					>
						<FiChevronDown size={20} />
					</motion.button>
				</div>

				{isCurrentSelectOpen && (
					<ul
						className={classNames(
							'sm:absolute top-16 mt-2 sm:mt-0',
							'w-full h-auto flex flex-col bg-primary',
							'rounded-lg border-2 border-[#2e374a] z-10'
						)}
					>
						{options.map(({ id, title, value }) => (
							<li
								key={id}
								className="p-3 hover:cursor-pointer hover:bg-tertiary"
								onClick={() => handleSelectValue({ title, value })}
							>
								{title}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Select;
