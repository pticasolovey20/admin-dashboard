import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/public/noavatar.png';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';

const UsersTable = () => {
	return (
		<table className="w-full">
			<thead className="border-b border-[#2e374a]">
				<tr>
					<td className="py-2.5">Email</td>
					<td className="hidden sm:table-cell py-2.5">Created At</td>
					<td className="hidden xs:table-cell py-2.5">Role</td>
					<td className="hidden sm:table-cell text-center py-2.5">Status</td>
					<td className="text-center py-2.5">Action</td>
				</tr>
			</thead>

			<tbody>
				{Array.from({ length: 4 }).map((_, index) => (
					<tr key={index} className="border-b border-[#2e374a]">
						<td className="py-2.5">
							<div className="flex items-center gap-2.5">
								<Image
									src={avatar}
									alt="product"
									priority
									className="hidden sm:block w-8 h-8 rounded-full object-cover"
								/>

								<span>jhon@gmail.com</span>
							</div>
						</td>
						<td className="hidden sm:table-cell py-2.5">25.12.2023</td>
						<td className="hidden xs:table-cell py-2.5">client</td>
						<td className="hidden sm:table-cell text-center py-2.5">passive</td>

						<td className="py-2.5">
							<div className="flex justify-center sm:gap-3">
								<Link href="/dashboard/users/id">
									<button className="py-0.5 px-2 rounded-md sm:bg-[teal]">
										<span className="hidden sm:block">View</span>
										<MdOutlineRemoveRedEye className="sm:hidden" size={20} />
									</button>
								</Link>

								<Link href="/">
									<button className="py-0.5 px-2 rounded-md sm:bg-[crimson]">
										<span className="hidden sm:block">Delete</span>
										<MdOutlineDelete className="sm:hidden" size={20} />
									</button>
								</Link>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
