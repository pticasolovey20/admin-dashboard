import { classNames } from '@/app/utils';

import Image from 'next/image';
import UserEditForm from '@/app/modules/users/components/forms/UserEditForm';

import avatar from '@/public/noavatar.png';

const UserDetailsPage = () => {
	return (
		<div className="flex-1 flex flex-col sm:flex-row gap-5">
			<div
				className={classNames(
					'flex-1 h-fit flex gap-5',
					'flex-col xs:flex-row sm:flex-col',
					'p-5 rounded-xl bg-secondary'
				)}
			>
				<div className="relative w-full xs:w-[50%] sm:w-full rounded-lg aspect-square overflow-hidden">
					<Image
						src={avatar}
						alt="avatar"
						priority
						className="w-full h-full object-cover"
					/>
				</div>

				<span className="font-bold text-secondary truncate">Jhon Doe</span>
			</div>

			<div className="flex-[3] h-fit p-5 rounded-xl bg-secondary">
				<UserEditForm />
			</div>
		</div>
	);
};

export default UserDetailsPage;
