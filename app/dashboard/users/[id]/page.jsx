import { fetchUser } from '@/app/modules/users/lib/utils';

import Image from 'next/image';
import UserEditForm from '@/app/modules/users/components/forms/UserEditForm';

import noavatar from '@/public/noavatar.png';

const UserDetailsPage = async ({ params }) => {
	const { id } = params;
	const user = await fetchUser(id);

	const userProps = {
		id,
		username: user.username,
		email: user.email,
		phone: user.phone,
		address: user.address,
		role: user.role,
		status: user.status,
	};

	return (
		<div className='flex-1 flex flex-col sm:flex-row gap-5'>
			<div className='flex-1 h-fit flex gap-5 flex-col xs:flex-row sm:flex-col'>
				<div className='relative w-full xs:w-[50%] sm:w-full rounded-lg aspect-square overflow-hidden'>
					<Image
						fill
						priority
						src={user?.userImage || noavatar}
						alt='avatar'
						className='w-full h-full object-cover'
						sizes='(width:100%), (height:100%)'
					/>
				</div>
			</div>

			<div className='flex-[3] h-fit p-5 rounded-xl bg-secondary'>
				<UserEditForm user={userProps} />
			</div>
		</div>
	);
};

export default UserDetailsPage;
