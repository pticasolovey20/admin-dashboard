const CardSleleton = ({ amount }) => {
	return (
		<div className='w-full flex justify-between flex-wrap gap-5 animate-pulse'>
			{Array.from({ length: amount }).map((_, index) => (
				<div
					key={index}
					className='flex-1 min-w-[200px] min-h-[160px] rounded-xl bg-secondary cursor-pointer'
				/>
			))}
		</div>
	);
};

export default CardSleleton;
