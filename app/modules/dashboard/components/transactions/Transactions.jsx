import Image from 'next/image';

import avatar from '@/public/noavatar.png';

const Transactions = () => {
	return (
		<div className="p-5 rounded-xl bg-secondary">
			<h2 className="text-2xl text-secondary font-extralight mb-5">Latest Transactions</h2>

			<table className="w-full">
				<thead className="border-b border-[#2e374a]">
					<tr>
						<td className="py-2.5">Name</td>
						<td className="py-2.5">Status</td>
						<td className="py-2.5">Date</td>
						<td className="py-2.5">Amount</td>
					</tr>
				</thead>

				<tbody>
					{Array.from({ length: 4 }).map((_, index) => (
						<tr key={index} className="border-b border-[#2e374a]">
							<td className="py-2.5">
								<div className="flex items-center gap-2.5">
									<Image
										src={avatar}
										alt="avatar"
										priority
										className="hidden sm:block w-8 h-8 rounded-full object-cover"
									/>

									<span className="truncate">J. Doe</span>
								</div>
							</td>

							<td className="min-w-[30px] py-2.5">
								<div className="w-1/2 sm:w-fit py-1 px-2 rounded-md bg-[#ebc034]">
									<span className="hidden sm:block text-sm">Pending</span>
								</div>
							</td>

							<td className="py-2.5">25.12.2023</td>
							<td className="py-2.5">$3.200</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
