import Link from 'next/link';

import SearchInput from '@/app/modules/users/components/SearchInput';
import UsersTable from '@/app/modules/users/components/UsersTable';
import Pagination from '@/app/modules/users/components/Pagination';

const UsersPage = () => {
	return (
		<div className="flex-1">
			<div className="flex flex-col gap-5 p-5 rounded-xl bg-secondary">
				<div className="flex flex-wrap gap-4">
					<SearchInput />

					<Link href="/dashboard/users/create-user">
						<button className="text-primary py-2 px-3 rounded-lg bg-action">
							Add new
						</button>
					</Link>
				</div>

				<UsersTable />
				<Pagination />
			</div>
		</div>
	);
};

export default UsersPage;
