import LeftSidebar from '../modules/dashboard/components/side-bar/LeftSidebar';
import Navbar from '../modules/dashboard/components/nav-bar/Navbar';
import Footer from '../modules/dashboard/components/footer/Footer';

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			<LeftSidebar />

			<main className="w-full flex-1 flex flex-col gap-5 p-5">
				<Navbar />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default DashboardLayout;
