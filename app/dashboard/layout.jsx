import { auth } from '@/app/auth';

import LeftSidebar from '@/app/modules/dashboard/components/side-bar/LeftSidebar';
import Navbar from '@/app/modules/dashboard/components/Navbar';
import Footer from '@/app/modules/dashboard/components/Footer';

const DashboardLayout = async ({ children }) => {
	const { user } = await auth();

	return (
		<div className='flex min-h-screen'>
			<LeftSidebar user={user} />

			<main className='w-full flex-1 flex flex-col gap-5 p-5'>
				<Navbar />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default DashboardLayout;
