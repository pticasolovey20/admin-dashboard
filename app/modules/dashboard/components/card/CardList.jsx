import { delay } from '@/app/utils';

import Card from './Card';

const CardList = async () => {
	await delay(2000);

	return (
		<div className='w-full flex justify-between flex-wrap gap-5'>
			{Array.from({ length: 3 }).map((_, index) => (
				<Card key={index} />
			))}
		</div>
	);
};

export default CardList;
