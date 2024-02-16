import { fetchUsers } from '@/app/modules/users/lib/utils';

import Link from 'next/link';

import SearchInput from '@/app/modules/users/components/SearchInput';
import UsersTable from '@/app/modules/users/components/UsersTable';
import Empty from '@/app/modules/users/components/Empty';
import Pagination from '@/app/modules/users/components/Pagination';

const UsersPage = async ({ searchParams }) => {
	const query = searchParams?.q || '';
	const page = searchParams?.page || 1;
	const { count, users } = await fetchUsers(query, page);

	return (
		<div className='w-full flex-1 flex'>
			<div className='w-full flex flex-col gap-5'>
				<div className='flex flex-wrap gap-4'>
					<SearchInput />

					<Link href='/dashboard/users/create-user'>
						<button className='text-primary py-2 px-3 rounded-lg bg-action'>Add new</button>
					</Link>
				</div>

				{users.length > 0 ? (
					<div className='flex flex-col gap-4 w-full p-5 rounded-xl bg-secondary'>
						<UsersTable users={users} />
						<Pagination count={count} />
					</div>
				) : (
					<Empty />
				)}
			</div>
		</div>
	);
};

export default UsersPage;
