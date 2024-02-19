import { cn, delay } from '@/app/utils';
import { transactions } from '../../constants';

import Image from 'next/image';
import avatar from '@/public/noavatar.png';

const Transactions = async () => {
	await delay(2000);

	return (
		<div className='p-5 rounded-xl bg-secondary'>
			<h2 className='text-2xl text-secondary font-extralight mb-5'>Latest Transactions</h2>

			<table className='w-full'>
				<thead className='border-b border-[#2e374a]'>
					<tr>
						<td className='py-2.5'>Name</td>
						<td className='py-2.5'>Status</td>
						<td className='py-2.5'>Date</td>
						<td className='py-2.5'>Amount</td>
					</tr>
				</thead>

				<tbody>
					{transactions.map(({ id, name, status, date, amount }) => (
						<tr key={id} className='border-b border-[#2e374a]'>
							<td className='py-2.5'>
								<div className='flex items-center gap-2.5'>
									<Image
										src={avatar}
										alt='avatar'
										priority
										className='hidden sm:block w-8 h-8 rounded-full object-cover'
									/>

									<span className='truncate'>{name}</span>
								</div>
							</td>

							<td className='min-w-[30px] py-2.5'>
								<div
									className={cn(
										'w-1/2 sm:w-fit py-1 px-2 rounded-md',
										status === 'Pending' && 'bg-[#ebc034]',
										status === 'Rejected' && 'bg-[#eb4034]',
										status === 'Complete' && 'bg-[#5ab947]'
									)}
								>
									<span className='hidden sm:block text-sm'>{status}</span>
								</div>
							</td>

							<td className='py-2.5'>{date}</td>
							<td className='py-2.5'>$ {amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
